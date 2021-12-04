const qs = require("querystring");
const http = require("https");

module.exports = class{
    constructor(uptimerobot_api_key){
        this.api_key = uptimerobot_api_key;
    }

    getAccountDetails(){
        return this.send("getAccountDetails", {});
    }

    getMonitors(options = {}){
        return this.send("getMonitors", options);
    }

    newMonitor(friendly_name, url, type, options = {}){
        options.friendly_name = friendly_name;
        options.url = url;
        options.type = type;
        return this.send("newMonitor", options);
    }

    editMonitor(monitor_id, options = {}){
        options.id = monitor_id;
        return this.send("editMonitor", options);
    }

    deleteMonitor(monitor_id){
        return this.send("deleteMonitor", {id: monitor_id});
    }

    resetMonitor(monitor_id){
        return this.send("resetMonitor", {id:monitor_id});
    }

    getAlertContacts(options = {}){
        return this.send("getAlertContacts", options);
    }

    newAlertContact(type, value, options = {}){
        options.type = type;
        options.value = value;
        return this.send("newAlertContact", options);
    }

    editAlertContact(alert_contact_id, options = {}){
        options.id = alert_contact_id;
        return this.send("editAlertContact", options);
    }

    deleteAlertContact(alert_contact_id){
        return this.send("deleteAlertContact", {id: alert_contact_id});
    }

    getMWindows(options = {}){
        return this.send("getMWindows", options);
    }

    newMWindow(friendly_name, type, value, start_time, duration){
        return this.send("newMWindow", {friendly_name, type, value, start_time, duration})
    }

    editMWindow(friendly_name, type, value, start_time, duration){
        return this.send("editMWindow", {friendly_name, type, value, start_time, duration})
    }

    deleteMWindow(id){
        return this.send("deleteMWindow", {id: id});
    }

    getPSPs(options = {}){
        return this.send("getPSPs", options);
    }

    newPSP(type, friendly_name, monitors, options = {}){
        options.type = type;
        options.friendly_name = friendly_name;
        options.monitors = monitors;

        return this.send("newPSP", options);
    }

    editPSP(type, friendly_name, monitors, options = {}){
        options.type = type;
        options.friendly_name = friendly_name;
        options.monitors = monitors;

        return this.send("editPSP", options);
    }

    deletePSP(id){
        return this.send("deletePSP", {id: id});
    }

    send(method, params){
        params.api_key = this.api_key;
        return new Promise((resolve, reject) => {
            const options = {
                "method": "POST",
                "hostname": "api.uptimerobot.com",
                "port": null,
                "path": "/v2/" + method,
                "headers": {
                    "cache-control": "no-cache",
                    "content-type": "application/x-www-form-urlencoded"
                }
            };
            const req = http.request(options, function (res) {
                let chunks = [];

                res.on("data", function (chunk) {
                    chunks.push(chunk);
                });

                res.on("end", function () {
                    const body = JSON.parse(Buffer.concat(chunks).toString());
                    console.log(body);

                    if(body.stat === "ok"){
                        resolve(body);
                    }else{
                        reject(body);
                    }

                });
            });

            req.write(qs.stringify(params));
            req.end();
        });
    }
};