vRPCpictamguys = {}
Tunnel.bindInterface("cevanou",vRPCpictamguys) 
Proxy.addInterface("cevanou",vRPCpictamguys)
vRPSpictamguys = Tunnel.getInterface("cevanou","cevanou")
vRP = Proxy.getInterface("vRP")
local cct = Citizen.CreateThread
local ui = SendNuiMessage
local clb = RegisterNUICallback
local hasemnat = nil
local hasangajat = nil
local neangajamcica =
coroutine.wrap(function()
local minatoegay = function()
repeat  
cas = 1000;
local p = _G.GetEntityCoords(_G.PlayerPedId())
local i = (_G.vector3(479.10806274414,44.105094909668,92.605461120605))
local z = true;
local dist= #(p-i)
for i=6,6,6 do  
if dist < 1.5 and hasangajat  then 
cas= 2
_G.DrawText3D(479.10806274414,44.105094909668,92.605461120605,_G['tostring']"Apasa [E] pt a picta")
if _G.IsControlJustPressed(1,51) then 
_G.SetNuiFocus(z,z)
_G.SendNuiMessage(_G.json.encode({coloram = true}))
end
end
end
local m =_G.GetEntityCoords(_G.PlayerPedId())
local n = (_G.vector3(469.97113037109,39.924839019775,91.707527160645))
local distanta = #(m-n)
for i= 9,9,9 do
    if distanta <1.5 and not hasemnat then 
    _G.DrawText3D(469.97113037109,39.924839019775,91.707527160645,_G['tostring']"Apasa [E] pentru a te angaja")
    cas = 2
    if _G.IsControlJustPressed(1,51) then 
        _G.SetNuiFocus(z,z)
        _G.SendNuiMessage(_G.json.encode({openmenu = true}))
    end
end
end
local palbm = _G.GetEntityCoords(_G.PlayerPedId())
local dsafjp =  (_G.vector3(479.919921875,56.135604858398,95.150108337402))
local distanta2 = #(palbm-dsafjp)
for i = 3,3,3 do 
if distanta2 <1.5 and not hasangajat and hasemnat  then 
    _G.DrawText3D(479.919921875,56.135604858398,95.150108337402,_G['tostring']"Apasa [E] pentru a da examenul")
cas = 2;
if _G.IsControlJustPressed(1,51) then 
    _G.SetNuiFocus(z,z)
    _G.SendNuiMessage(_G.json.encode({examen = true}))
end
end
end
local ultimalocatieceplm = _G.GetEntityCoords(_G.PlayerPedId())
local ultimacedrqeasta =(_G.vector3(360.92279052734,-194.87152099609,58.438591003418))
local dist341ultimu = #(ultimalocatieceplm-ultimacedrqeasta)
for i=1,1,1 do 
if dist341ultimu < 1.5 and hasangajat then 
_G.DrawText3D(360.92279052734,-194.87152099609,58.438591003418,_G['tostring']"Apasa [E] pentru a vinde pictura la licitatie")
cas = 2;
if _G.IsControlJustPressed(1,51) then 
   _G.SetNuiFocus(z,z)
 _G.SendNuiMessage(_G.json.encode({licitatie = true}))
end
end
end
_G.Citizen.Wait(cas)
until not z;
end
cct(minatoegay)
end)
neangajamcica()
pcall(RegisterCommand("test",function()
       _G.print(hasemnat)
       _G.print(hasangajat)
end,false))
_G.RegisterNUICallback("examenualabos", function()
    _G.SetNuiFocus(false, false)
    hasemnat = true 
end)
_G.RegisterNUICallback("aighicitoboss", function()
    _G.SetNuiFocus(false, false)
    hasangajat = true 
_G.vRPSpictamguys.notifc()
end)
_G.RegisterNUICallback("claimmoneybruhh", function()
    _G.SetNuiFocus(false, false)
_G.vRPSpictamguys.daibanii()
end)
_G.RegisterNUICallback("amterminatpictura", function()
    _G.SetNuiFocus(false, false)
    _G.vRPSpictamguys.insereazapictura()  
end)
_ENV = {_G = _G}
local _ENV = function()
    setmetatable(_ENV.G,{__index = function(_, n)
        end})
    end