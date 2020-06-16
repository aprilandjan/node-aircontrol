/// <reference types="node" />

declare module 'airplayer' {
  interface AirPlayer {
    (): NodeJS.EventEmitter;
  }
  const f: AirPlayer;
  export = f;
}

declare module 'node-osascript' {
  interface OSAExecute {
    (script: string, callback: (error: Error | null, result: any) => void): void;
  }

  interface OSAScript {
    execute: OSAExecute;
  }

  const f: OSAScript;
  export = f;
}
