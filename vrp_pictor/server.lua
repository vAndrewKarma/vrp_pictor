    local Tunnel = module("vrp", "lib/Tunnel")
    local Proxy = module("vrp", "lib/Proxy")
    vRP = Proxy.getInterface("vRP")
    vRPclient = Tunnel.getInterface("vRP","cevanou")
    vRPSpictamguys = {}
    Tunnel.bindInterface("cevanou",vRPSpictamguys)
    Proxy.addInterface("cevanou",vRPSpictamguys)
    vRPCpictamguys = Tunnel.getInterface("cevanou","cevanou",{})  

    function vRPSpictamguys.insereazapictura()
        local user_id = _G['tonumber'](vRP.getUserId({source}))
        local player = vRP.getUserSource({user_id})
        local cedrq = exports.ghmattimysql:executeSync("SELECT pictura FROM vrp_users WHERE id = @_id", {["@_id"] = user_id})
     local aqu = vRP.getInventoryItemAmount({user_id, "aquarele"})
     local pictura = vRP.getInventoryItemAmount({user_id, "pensula"})
     if aqu > 1 and pictura > 1 then 
        if cedrq[1].pictura < 1  then 
           exports.ghmattimysql:execute("UPDATE vrp_users SET pictura = @pictura WHERE id = @id", { ["@id"] = user_id, ["pictura"] = 1 })
           vRPclient.notify(player,{"Ai primit o pictura"})
      else 
    vRPclient.notify(player,{"Ai deja o pictura ce o poti livra"})
end
end
 end

 function vRPSpictamguys.notifc()
    local user_id = _G['tonumber'](vRP.getUserId({source}))
    local player = vRP.getUserSource({user_id})
    vRPclient.notify(player,{"Ai luat examenul"})
 end


 function vRPSpictamguys.daibanii()

    local user_id = _G['tonumber'](vRP.getUserId({source}))
    local player = vRP.getUserSource({user_id})
    local plm = exports.ghmattimysql:executeSync("SELECT pictura FROM vrp_users WHERE id = @_id", {["@_id"] = user_id})
    local bani = math.random(1000,35000)
    if plm[1].pictura == 1  then 
        exports.ghmattimysql:execute("UPDATE vrp_users SET pictura = @pictura WHERE id = @id", { ["@id"] = user_id, ["pictura"] = 0 })
        vRP.giveMoney({user_id,bani})
        vRPclient.notify(player,{"Ai primit " ..bani.. "$ pentru vanzarea picturii"})
    else
        vRPclient.notify(player,{"Lipseste o pictura bos :("})
    end

 end
 