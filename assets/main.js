var app = new Vue({
    el: "#root",

    data:{
        chats:[
            {
                name: "Boolean #18",
                avatar: '_1',
                messages:[
                    {
                        text: "Ciao",
                        sent: true
                    },
                    {
                        text: "Posso Chiamarti?",
                        sent: true
                    },
                    {
                        text: "No",
                        sent: false
                    },
                    {
                        text: "Ora non posso parlare..",
                        sent: false
                    },
                    {
                        text: "Ok ci sentiamo domani!",
                        sent: true
                    }
                ]
            },

            {
                name: "Omar Peretti",
                avatar: '_2'
            },

            {
                name: "Riccardo Tamassia",
                avatar: '_3'
            },

            {
                name: "Mattia Cesta",
                avatar: '_4'
            }
        ]
    }

});
