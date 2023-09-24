import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { CountuserbillService } from 'src/app/services/countuserbill.service';

@Component({
    selector: 'app-userbill',
    templateUrl: './userbill.component.html',
    styleUrls: ['./userbill.component.css']
})
export class UserbillComponent implements OnInit {
    public messages: string[] = [];
    public badgeCount: number = 0; // Initialize badgeCount to 0

    constructor(
        private websocketService: WebsocketService,
        private countservice: CountuserbillService
    ) { }

    ngOnInit(): void {
        this.websocketService.initializeWebSocketConnection();

        this.websocketService.messages$.subscribe((messageList: string[]) => {
            this.messages = messageList;
            // You can also update the badge count here
        });

        // Subscribe to the userBillCount$ observable to get the updated count
        this.countservice.userBillCount$.subscribe((count: number) => {
            this.badgeCount = count; // Update badgeCount when the count changes
        });
    }
}
