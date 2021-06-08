class Contestant {
    constructor(){
      this.index = null
      this.name = null
      this.answer = 0
    }
  
    getCount(){
      var ContestantCountRef = database.ref('playerCount');
      ContestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
    static getContestantInfo() {
      var ContestantInfoRef = database.ref('contestant');
      ContestantInfoRef.on("value", (data)=>{
       allContestants = data.val();
      })
    }
  }