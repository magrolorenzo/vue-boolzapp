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
                    {text: "Ciao", sent: true, del:false, date: '10/01/2020 15:30:55'},
                    {text: "Posso Chiamarti?", sent: true, del:false, date: '10/01/2020 15:31:55'},
                    {text: "No", sent: false, del:false, date: '10/01/2020 15:35:55'},
                    {text: "Ora non posso parlare..", sent: false, del:false, date: '10/01/2020 15:40:55'},
                    {text: "Ok ci sentiamo domani!", sent: true, del:false, date: '10/01/2020 15:41:55'}
                ]

            },

            {
                name: "Omar Peretti",
                visible: true,
                messages:[
                    {text: "Ciao Lollo", sent: false, del:false, date: '10/01/2020 16:00:55'},
                    {text: "Hey dimmi", sent: true, del:false, date: '10/01/2020 16:05:55'},
                    {text: "Domani sera ci sei?", sent: false, del:false, date: '10/01/2020 16:10:55'},
                    {text: "No mi spiace", sent: true, del:false, date: '10/01/2020 16:11:55'},
                    {text: "Peccato", sent: false, del:false, date: '10/01/2020 16:20:55'}
                ]
            },

            {
                name: "Riccardo Tamassia",
                visible: true,
                messages:[
                    {text: "Passo a prenderti io?", sent: false, del:false, date: '10/01/2020 11:30:55'},
                    {text: "Si grazie mille", sent: true, del:false, date: '10/01/2020 11:30:55'},
                    {text: "Ok 10 minuti e sono li", sent: false, del:false, date: '10/01/2020 11:30:55'},
                    {text: "Ok io porto la birra", sent: true, del:false, date: '10/01/2020 11:30:55'},
                    {text: "Scendi!", sent: false, del:false, date: '10/01/2020 11:30:55'}
                ]
            },

            {
                name: "Mattia Cesta",
                visible: true,
                messages:[
                    {text: "Porti fuori il cane dopo?", sent: false, del:false, date: '10/01/2020 20:30:55'},
                    {text: "Si tra 20 minuti", sent: true, del:false, date: '10/01/2020 20:30:55'},
                    {text: "Ok porto pure il mio!", sent: false, del:false, date: '10/01/2020 20:30:55'}
                ]
            }
        ]
    },

    methods:{

        // Imposta la variabile dell app current_chat uguale al indice della chat selezionata
        select_chat(contact_index){
            this.current_chat = contact_index;
            console.log(contact_index);
            console.log(this.current_chat);
        },

        // Metedoso per l'invio del messaggio on keyup.enter sulla barra in basso a destra
        send_message(){

            // Oggetto messaggio di supporto da pushare nel array corrispondente
            let new_message_obj = {
                text: "",
                sent: true,
                del: false,
                date: new Date()
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
            // Salvo l'indice della chat in cui ho scritto la risposta
            // Se si scrive e poi si cambia chat la risposta verrà visualizzata sulla chat corretta
            let involved_chat = this.current_chat;

            setTimeout(() => {

                // Oggetto messaggio di risposta automatica
                let new_message_obj = {
                    text: "Ok!",
                    sent: false,
                    del: false,
                    date: new Date()
                };

                let last_message_pos = (this.chats[involved_chat].messages.length);
                // Inserisco il nuovo oggetto messaggio nell'array
                this.chats[involved_chat].messages.splice(last_message_pos, 0, new_message_obj);
            },1000);

        },

        // Funzione che viene richiamata per la ricerca
        // Solo quando la stringa è lunga almeno 3 caratteri
        searching(){

            // Normalizzo la stringa scritta dall'utente a tutta minuscola
            let lower_case_search = this.search_chat.toLowerCase();

            // Ciclo il nome di ogni chat e verifico se lastringa scritta è presente nel nome
            // Nel ciclo vengono normalizzati anche i nomi in minuscolo
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

        // Funzione per la cancellazione del messaggio dalla chat
        delete_this_message(message_pos){
            this.chats[this.current_chat].messages.splice(message_pos, 1);
        },

        // Funzione per normalizzare la data solamente in Ore e Minuti
        last_message_hour(m_date){

            // let hh = m_date.getHours;
            // let mm = m_date.getMinutes;
            // let t = hh + ":" + mm;
            return moment(m_date).format("HH:mm");
        },

        show_last_message_row() {

        }

    } // Chiusura Methods

});
