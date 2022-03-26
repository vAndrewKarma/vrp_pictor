fx_version("bodacious")
game  ('gta5') 

lua54 ('TC168')


dependency "vrp"

ui_page {
  'html/index.html',
}
server_scripts {
	'@vrp/lib/utils.lua',
	'server.lua'
}

client_scripts {
    "lib/Tunnel.lua",
    "lib/Proxy.lua",
	'client.lua',
  'functions.lua'
}
files {
  'html/*.*'
}

  