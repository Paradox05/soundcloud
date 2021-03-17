export class Timer{
    private timeRemaining: number;
    constructor(){
        this.timeRemaining = 0;
        
    }

    public tick() {
        let timeStart = new Date().getTime();
        return {
            
            get time1() {
                const seconds = (new Date().getTime() - timeStart / 1000) + 's';
                return seconds;
            },
            get time2() {
                const ms = (new Date().getTime() - timeStart) + 's';
                return ms;
            }
        }
    }
    
}