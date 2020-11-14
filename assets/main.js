var app = new Vue({
    el: "#root",


    data:{

        // Indice di posizione della chat corrente
        current_chat: 0,

        // Stringa di supporto per salvataggio nuvo messaggio
        new_text_message: "",
        // Var di supporto per misurare lunghezza array messaggi della chat
        last_message_pos:0,

        // Variabile per ricerca chat
        search_chat: "",

        // Varaibile per visualizzare menu delete message
        show_delete_menu: false,

        chats:[
            {
                name: "Boolean#18",
                visible: true,
                messages:[
                    {text: "Ciao", sent: true, del:false, date: '10/01/2020 15:30:55', h:""},
                    {text: "Posso Chiamarti?", sent: true, del:false, date: '10/01/2020 15:30:55'},
                    {text: "No", sent: false, del:false, date: '10/01/2020 15:30:55'},
                    {text: "Ora non posso parlare..", sent: false, del:false, date: '10/01/2020 15:30:55'},
                    {text: "Ok ci sentiamo domani!", sent: true, del:false, date: '10/01/2020 15:30:55'}
                ]
                //last_message: messages.length - 1
            },

            {
                name: "Omar Peretti",
                visible: true,
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
                visible: true,
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
                visible: true,
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
        },

        // Funzione che viene richiamata per la ricerca
        // Solo quando la stringa è lunga almeno 3 caratteri
        searching(){

            let lower_case_search = this.search_chat.toLowerCase();

            for (var i = 0; i < this.chats.length; i++) {

                let lower_case_name = this.chats[i].name.toLowerCase();
                if(lower_case_name.includes(lower_case_search)){
                    this.chats[i].visible = true;
                } else{
                    this.chats[i].visible = false;

                };
            };
        },

        // Funzione per ripristinare la colonna di sinistra con tutti i contatti
        not_searching(){
            for (var i = 0; i < this.chats.length; i++) {
                    this.chats[i].visible = true;
            };
        },

        // Funzione per il mostra e noscondi del menu Delete
        show_hide_menu(message_pos){
            if(this.chats[this.current_chat].messages[message_pos].del == false){
                this.chats[this.current_chat].messages[message_pos].del = true;
            } else {
                this.chats[this.current_chat].messages[message_pos].del = false;
            }
            console.log(this.chats[this.current_chat].messages[message_pos].del);
        },

        delete_this_message(message_pos){
            this.chats[this.current_chat].messages.splice(message_pos, 1);
        }

    } // Chiusura Methods


});
