import {extendObservable} from 'mobx'

class ListaData {
	constructor(){
		extendObservable(this,
		{
			tareas:[
				{
					key:0,
					item:'Learn React'
				},
				{
					key:1,
					item:'Learn Mobx'
				}
			]
		})
	}

	add(){
		let key
		if(this.tareas.length === 0){
			key = 0
		}
		else{
			key= this.tareas[this.tareas.length-1].key+1
		}
		if(document.getElementById("addInput").value!=="")
		{
			this.tareas.push({key: key ,item:document.getElementById("addInput").value})
			document.getElementById("addInput").value = ""
		}
	}

	rm(){
		let checkboxs=document.getElementsByClassName("checkList")
		for(let i=0; i<= checkboxs.length-1;i++){
			if(checkboxs[i].checked){
				for(let j=0; j<= this.tareas.length-1 ;j++){
					if(parseInt(checkboxs[i].value) === this.tareas[j].key){
						checkboxs[j].checked=false
						this.tareas.splice(j,1)
					}
				}
			}
		}
	}

}

const varlistaData= new ListaData();

export default varlistaData
