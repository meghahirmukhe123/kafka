// import { Injectable } from '@angular/core';
// import * as SockJS from 'sockjs-client';
// import { Stomp } from '@stomp/stompjs';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//     providedIn: 'root'
// })
// export class WebsocketService {
//     private stompClient: any;
//     private messagesSubject = new BehaviorSubject<string[]>([]);
//     public messages$ = this.messagesSubject.asObservable();

//     constructor() { }

//     initializeWebSocketConnection(): void {
//         const socket = new SockJS('http://localhost:1003/ws'); // Replace with your backend URL
//         this.stompClient = Stomp.over(socket);
//         this.stompClient.connect({}, () => {
//             this.stompClient.subscribe('/bill', (message: { body: string }) => {
//                 const currentMessages = this.messagesSubject.value;
//                 currentMessages.push(message.body);
//                 this.messagesSubject.next(currentMessages);
//             });
//         });
//     }
// }


import { Injectable } from '@angular/core';
import * as SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class WebsocketService {
    private stompClient: any;
    private messagesSubject = new BehaviorSubject<string[]>([]);
    public messages$ = this.messagesSubject.asObservable();

    constructor() { }

    initializeWebSocketConnection(): void {
        if (this.stompClient && this.stompClient.connected) {
            // If the connection is already established, do not create a new one.
            return;
        }

        const socket = new SockJS('http://localhost:1003/ws'); // Replace with your backend URL
        this.stompClient = Stomp.over(socket);
        this.stompClient.connect({}, () => {
            // Clear previous subscriptions to avoid duplicates
            this.stompClient.unsubscribe('/bill');

            // Subscribe to the /bill channel
            this.stompClient.subscribe('/bill', (message: { body: string }) => {
                const currentMessages = this.messagesSubject.value;
                currentMessages.push(message.body);
                this.messagesSubject.next(currentMessages);

                // Store messages in localStorage
                localStorage.setItem('messages', JSON.stringify(currentMessages));
            });
        });

        // Retrieve messages from localStorage on initialization
        const storedMessages = localStorage.getItem('messages');
        if (storedMessages) {
            this.messagesSubject.next(JSON.parse(storedMessages));
        }
    }
}
