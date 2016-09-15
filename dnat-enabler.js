//@auth

var envName = '${env.envName}', 
nodes = jelastic.env.control.GetEnvInfo(envName, session).nodes,
enabled = Boolean(getParam("enabled")),
masterIP = nodes[0].address,
dnatEnableParams = ' -t nat -I PREROUTING -p tcp --dport 443 -j DNAT --to-destination ' + masterIP,
dnatDisableParams = ' -t nat -D PREROUTING -p tcp --dport 443 -j DNAT --to-destination ' + masterIP,
groups = [], selectedGroup = {},
IPs = [], resp = [];

for (var i = 0, n = nodes.length; i < n; i++) { 
      groups.push(nodes[i].nodeGroup)
    }
    
if(contains.call(groups, "bl") selectedGroup ='lb'
   else if(contains.call(groups, "lb") selectedGroup ='lb'
      else  selectedGroup ='lb'

print (selectedGroup);

/*if (groups['lb'] ) selected = groups['lb'] 
    else if (groups['bl'] )  selected = groups['bl'] 
            else selected = groups['cp']
            
/*
/*for (var i = 1, n = selected.length; i < n; i++) { 

    if (enabled) {
            resp.push(jelastic.env.control.ExecCmdById(envName, session, selected[i].id,  toJSON( [ { "command": "iptables", "params": dnatEnableParams } ]), true, "root"));; 
    } else {
            resp.push(jelastic.env.control.ExecCmdById(envName, session, selected[i].id, toJSON( [ { "command": "iptables", "params": dnatDisableParams } ]), true, "root"));;
 
    }
} */


return {
    result: 0,
    responses: resp
}
