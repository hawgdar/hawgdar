import hashlib
import binascii
import auth_secret

def hash(pw):
    digest = 'sha256'
    salt = auth_secret.salt
    rounds = 10000

    derived_key = hashlib.pbkdf2_hmac(digest, pw, salt, rounds)
    ascii_key = binascii.hexlify(derived_key)

    return ascii_key
