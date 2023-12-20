class Signal {
    private listeners: ((data: any) => void)[] = [];
  
    subscribe(callback: (data: any) => void): () => void {
      this.listeners.push(callback);
      return () => {
        this.listeners = this.listeners.filter(listener => listener !== callback);
      };
    }
  
    dispatch(data: any): void {
      this.listeners.forEach(listener => listener(data));
    }
  }
  
  export default Signal;
  