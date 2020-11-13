var app = new Vue({
    el: "#root",


    data:{

        current_chat: 0,

        new_text_message: "",

        new_message: {
            text: "",
            sent: true
        },

        chats:[
            {
                name: "Boolean#18",
                messages:[
                    {text: "Ciao", sent: true},
                    {text: "Posso Chiamarti?", sent: true},
                    {text: "No", sent: false},
                    {text: "Ora non posso parlare..", sent: false},
                    {text: "Ok ci sentiamo domani!", sent: true}
                ]
                //last_message: messages.length - 1
            },

            {
                name: "Omar Peretti",
                messages:[
                    {text: "Ciao Lollo", sent: false},
                    {text: "Hey dimmi", sent: true},
                    {text: "Domani sera ci sei?", sent: false},
                    {text: "No mi spiace", sent: true},
                    {text: "Peccato", sent: false}
                ]
            },

            {
                name: "Riccardo Tamassia",
                messages:[
                    {text: "Passo a prenderti io?", sent: false},
                    {text: "Si grazie mille", sent: true},
                    {text: "Ok 10 minuti e sono li", sent: false},
                    {text: "Ok io porto la birra", sent: true},
                    {text: "Scendi!", sent: false}
                ]
            },

            {
                name: "Mattia Cesta",
                messages:[
                    {text: "Porti fuori il cane dopo?", sent: false},
                    {text: "Si tra 20 minuti", sent: true},
                    {text: "Ok porto pure il mio!", sent: false}
                ]
            }
        ]
    },

    methods:{

        select_chat(selected_contact, contact_index){
            app.current_chat = contact_index;
        },

        send_message(new_text, chat_index){

            this.new_message.text = new_text;

            console.log(this.new_message);
            console.log(this.new_message.text);
            console.log(chat_index);

            this.chats[chat_index].messages.splice(-1, 0, this.new_message);
            this.new_message.text = "";
        }
    }

});
