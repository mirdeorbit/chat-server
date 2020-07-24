import _ from 'underscore';

import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WsResponse
} from '@nestjs/websockets';

import { Logger } from '@nestjs/common';

import { Socket, Server } from 'socket.io';

@WebSocketGateway(3300)
export class WebsocketGateway implements OnGatewayConnection, OnGatewayDisconnect {

    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger('ChatsGateway');

    @SubscribeMessage('joinRooms')
    joinRooms(client: Socket, data: String[]): WsResponse<unknown> {
        this.logger.log(`${client.id} joined to room: ${data}`);

        client.join(data);

        return { event: 'joinRooms', data };
    }

    @SubscribeMessage('message')
    message(client: Socket, data: Object): any {
        this.server.to(data.chatId).emit('message', data.text);
    }

    afterInit() {
        this.logger.log('Init websocket server');
    }

    handleConnection(client: Socket, ...args: any[]) {
        client.leaveAll();

        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
}