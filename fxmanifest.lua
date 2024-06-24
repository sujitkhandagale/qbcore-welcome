fx_version 'cerulean'
game 'gta5'
lua54 'yes'
author 'Kakarot'
description 'Loading screen'
version '1.2.0'

files {
  'assets/**',
  'html/*'
}

client_script 'client.lua'

loadscreen {
  'html/index.html'
}
 

loadscreen_cursor 'yes'
loadscreen_manual_shutdown 'yes'
