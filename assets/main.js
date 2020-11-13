var app = new Vue({
    el: "#root",


    data:{

        // Indice di posizione della chat corrente
        current_chat: 0,

        // Stringa di supporto per salvataggio nuvo messaggio
        new_text_message: "",
        // Var di supporto per misurare lunghezza array messaggi della chat
        last_message_pos:0,


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
            this.current_chat = contact_index;
        },

        send_message(){

            // Oggetto messaggio di supporto da pushare nel array corrispondente
            let new_message_obj = {
                text: "",
                sent: true
            };

            // assegno all oggetto di supporto la nuva stringa
            new_message_obj.text = this.new_text_message;

            // Mi salvo l'ultima posizione dell'array dei messaggi della chat corente
            let last_message_pos = (this.chats[this.current_chat].messages.length);
            console.log("Ultima posizioe = " + last_message_pos);

            // Inserisco il nuovo oggetto messaggio nell'array
            this.chats[this.current_chat].messages.splice(last_message_pos, 0, new_message_obj);

            // Svuoto il nuvo messaggio
            this.new_text_message = "";

            // Chiamo la funzione di risposta automatica
            this.answer_me();
        },

        // Metodo richiamato per la risposta automatica dopo i 3 secondi
        answer_me(){
            // Salvo l'indeice della chat in cui ho scritto la risposta
            // Se si scrive e poi si cambia chat la risposta verrà visualizzata sulla chat corretta
            let involved_chat = this.current_chat;

            setTimeout(() => {

                // Oggetto messaggio di risposta automatica
                let new_message_obj = {
                    text: "Ok!",
                    sent: false
                };


                let last_message_pos = (this.chats[involved_chat].messages.length);
                // Inserisco il nuovo oggetto messaggio nell'array
                this.chats[involved_chat].messages.splice(last_message_pos, 0, new_message_obj);
            },1000);
        }

    }

});
