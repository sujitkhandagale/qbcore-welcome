local serverName = GetConvar("sv_hostname", "Unknown")
local serverPlayers = GetConvar("sv_maxclients", "0")
local serverGamemode = GetConvar("gamename", "Unknown")

print("Server Name: " .. serverName)
print("Server Players: " .. serverPlayers)
print("Server Gamemode: " .. serverGamemode)