using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Net;
using System.Net.Sockets;
using System.Collections.Specialized;

namespace Hawgdar_Data_Relay
{
    class Program
    {
        private const int listenPort = 8492;

        static int Main(string[] args)
        {
            UdpClient sock = new UdpClient(listenPort);
            IPEndPoint endpoint = new IPEndPoint(IPAddress.Any, listenPort);

            Console.WriteLine("Hawgdar Data Relay ready to accept connections\n");

            int count = 0;
            while (true)
            {
                // Get flight data in UDP datagram from DCS script

                byte[] buf;
                string msg;

                buf = sock.Receive(ref endpoint);
                msg = Encoding.ASCII.GetString(buf, 0, buf.Length);

                //Console.WriteLine(msg);


                // Send to API

                using (var client = new WebClient())
                {
                    client.Headers.Add("user-agent", "Hawgdar Data Relay");
                    var values = new NameValueCollection();

                    string[] tokens = msg.Split(new[] { '&' }, StringSplitOptions.None);
                    foreach (string t in tokens)
                    {
                        string[] pair = t.Split(new[] { '=' }, StringSplitOptions.None);
                        values.Add(pair[0], pair[1]);
                    }

                    var response = client.UploadValues("https://hawgdar.com/data", values);
                    var responseString = Encoding.Default.GetString(response);
                    //Console.WriteLine(responseString);
                    count++;
                    if (count == 1)
                    {
                        Console.Write("\r{0} message sent", count);
                    } else
                    {
                        Console.Write("\r{0} messages sent", count);
                    }
                }
            }

            sock.Close();
            return 0;
        }
    }
}
