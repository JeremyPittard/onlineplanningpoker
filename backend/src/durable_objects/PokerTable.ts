import { z } from "zod";

export class PokerTable {
  state: DurableObjectState;

  constructor(state: DurableObjectState, env: any) {
    this.state = state;

    //keep connection alive
    this.state.setWebSocketAutoResponse(
      new WebSocketRequestResponsePair("ping", "pong")
    );
  }

  async fetch(request: Request) {
    const pair = new WebSocketPair();
    this.state.acceptWebSocket(pair[1]);

    return new Response(null, { status: 101, webSocket: pair[0] });
  }

  async webSocketMessage(ws: WebSocket, data: string) {
    try {
      const json: unknown = JSON.parse(data);
      const { message } = z.object({ message: z.string() }).parse(json);
      // TODO determine if this should be a string or a full json object.
      // json object may be useful.
      ws.send(JSON.stringify({ message }));
    } catch (error) {
      console.warn("Error parsing message", error);
    }
  }

  async webSocketClose(
    ws: WebSocket,
    code: number,
    reason: string,
    wasClean: boolean
  ) {
    console.log("WebSocket closed", { code, reason, wasClean });
  }

  async webSocketError(ws: WebSocket, error: Error) {
    console.error("WebSocket error", error);
  }
}
