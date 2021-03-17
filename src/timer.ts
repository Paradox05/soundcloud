export class Timer{
    private timeRemaining: number;
    constructor(){
        this.timeRemaining = 0;
        
    }

    public startTimer() {
        let timeRemaining = new Date().getTime();
        return {
            /** <integer>s e.g 2s etc. */
            get seconds() {
                const seconds = Math.ceil((new Date().getTime() - timeStart) / 1000) + 's';
                return seconds;
            },
            /** Milliseconds e.g. 2000ms etc. */
                get ms() {
                    const ms = (new Date().getTime() - timeStart) + 'ms';
                    return ms;
                }
        }
    }
    
}