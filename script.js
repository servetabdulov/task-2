function gettime() {
    let now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
}

class Message{
    constructor(author, history, text) {
        this.author = author;
        this.history = history;
        this.text = text;
    }
    toString(){
        var a = String(`${this.history} ${this.author} ${this.text}`);
        return a;
    }
}
class Messenger extends Message{
    show_history(){
        this.toString();
    }
    send(author, text){
        this.author = author;
        this.text = text;
        this.history = gettime();
        console.log(this.toString());
    }
}
let messenger = new Messenger();
messenger.send('Adil', 'ilk mesaj');
messenger.send('Məryəm', 'İkinci mesaj');
messenger.show_history();