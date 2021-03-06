local log_file = nil
MainPanel = GetDevice(0)

-- I don't know how to lua. DCS World seems to include LuaSocket, but I couldn't
-- (yet) figure out how to include it, so I just downloaded it into the same
-- directory as this file.
package.path = package.path .. ";C:\\Users\\Bethany\\Saved Games\\DCS\\Scripts\\luasocket\\lua\\?.lua"
package.cpath = package.cpath .. ";C:\\Users\\Bethany\\Saved Games\\DCS\\Scripts\\luasocket\\socket"

local https = nil
local http = nil
local socket = nil
local udp = nil
local session_id = nil

function LuaExportStart()
	log_file = io.open("C:/Users/Bethany/Saved Games/DCS/Logs/Export.log", "w")
	log_file:write("Hello from Export.lua\n")
	
	socket = require("socket")
	udp = socket.udp()
	udp:setpeername("127.0.0.1", 8492)
	
	session_id = math.random(1000000000)
	log_file:write(string.format("Session id: %d\n", session_id))
end

function LuaExportBeforeNextFrame()
end

function LuaExportAfterNextFrame()
end

function LuaExportStop()
	if log_file then
		log_file:write("Goodbye from Export.lua")
		log_file:close()
		log_file = nil
	end
end

function DefinitelyQuote(thing)
	return '"' .. thing .. '"'
end

function MaybeQuote(thing)
	-- Quote the given number, string, or boolean according to what JSON likes.
	if type(thing) == 'number' then
		return thing
	else
		return '"' .. thing .. '"'
	end
end

function Len(t)
	local count = 0
	for k,v in pairs(t) do
		count = count + 1
	end
	return count
end

function IsFriendlyType(thing)
	if type(thing) == 'number' or type(thing) == 'string' or type(thing) == 'table' or type(thing) == 'boolean' then
		return true
	else
		log_file:write(string.format("I am utterly flummoxed as to how to handle variables of type %s\n", type(thing)))
		return false
	end
end

-- Lua is to Python as PHP is to Perl :(
function TableToJankyJSON(t)
	-- Represent t as nested objects (if applicable)
	local table_len = Len(t)
	local table_ix = 0
	local result = '{'
	
	for k,v in pairs(t) do
		if IsFriendlyType(k) and IsFriendlyType(v) then			
			-- Commas if elements precede
			if table_ix > 0 then
				result = result .. ', '
			end
			
			-- Key (JSON likes them quoted, even if numeric...)
			result = result .. DefinitelyQuote(k) .. ': '
			
			-- Value
			if type(v) == 'table' then
				result = result .. TableToJankyJSON(v)
			else
				result = result .. MaybeQuote(v)
			end

		else
			log_file:write("Unfriendly key or value encountered; giving up because I'm a wimpy language\n")
			table_len = table_len - 1
		end

		-- Finally
		table_ix = table_ix + 1
	end
	return result .. '}'
end

function LuaExportActivityNextEvent(t)
	local tNext = t

	local player_id = LoGetPlayerPlaneId()
	local o = LoGetWorldObjects()

	local post_url = "https://hawgdar.com/data"
	
	local post_body = string.format("t=%d&player_id=%d&full_details=%s", t, player_id, TableToJankyJSON(o))
	log_file:write(post_body .. '\n')
	
	-- Send data to the relay. To minimize blocking, use UDP (fire-and-forget, as it were).
	-- Really, if security/authentication was not an issue, you could send post_body as the
	-- content of a POST request, but using the relay is best for performance and security.
	udp:send(post_body)
	
	tNext = tNext + 1.0
	return tNext
end
