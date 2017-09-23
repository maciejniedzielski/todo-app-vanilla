    window.onload=function(){
      //Function, which creates a new task and adds it into task list
      function add_item(){
          //Statement which defines whether an input is empty or not (if it's empty -> ADD BUTTON wont make anything)
            if(document.getElementById('task-text').value==""){
                  add_btn.addEventListener('click',function(){event.preventDefault();}, false);
            }
            else{
                  document.getElementById('list').style.display="block";


                  var node=document.createElement("li"),
                  list=document.getElementById('list'),
                  text=document.getElementById('task-text').value;
                  node.innerHTML=text;


                        var container = document.createElement('span');
                        container.classList.add('btns-cont');
                        node.appendChild(container);

                                var done_btn = document.createElement('button');
                                done_btn.classList.add('done-btn');
                                done_btn.innerHTML='<span class="fa fa-check-square-o" aria-hidden="true"></span>';
                                container.appendChild(done_btn);

                                var remove_btn = document.createElement('button');
                                remove_btn.classList.add('remove-btn');
                                remove_btn.innerHTML='<span class="fa fa-trash" aria-hidden="true"></span>';
                                container.appendChild(remove_btn);

                                var pin_btn = document.createElement('button');
                                pin_btn.classList.add('pin-btn');
                                pin_btn.innerHTML='<span class="fa fa-link" aria-hidden="true">';
                                container.appendChild(pin_btn);

                              //Calling REMOVE_ITEM function after clicking REMOVE BUTTON
                                remove_btn.addEventListener('click',remove_item, false);
                                pin_btn.addEventListener('click',makeImportant, false);
                                done_btn.addEventListener('click',makeDone, false);
                //Clearing input value after adding new task
                  document.getElementById('task-text').value="";
                  list.appendChild(node);

                  document.getElementById('welcome').style.display="none";
                }

                //OnMouseOver Event which shows/hides an btns-container
                var li_all=document.getElementsByTagName('li');
                for (var i = 0; i < li_all.length; i++) {
                    var li = li_all[i];
                    li.addEventListener('mouseover',function(){
                      var li_nodes = this.childNodes;
                      li_nodes[1].style.display="block";
                    }, false);
                    li.addEventListener('mouseout',function(){
                      var li_nodes = this.childNodes;
                      li_nodes[1].style.display="none";
                    }, false);
                  }
      }
      //Calling ADD_ITEM function after clicking ADD BUTTON
        var add_btn=document.getElementById('add-btn');
        add_btn.addEventListener('click',add_item, false);

      function remove_item(){
        var item= this.parentNode.parentNode;
        var parent= item.parentNode;
        parent.removeChild(item);
      }

      function makeImportant(){
        var item= this.parentNode.parentNode;
        var ol_list=this.parentNode.parentNode.parentNode;

        if(ol_list.id=="list"){
          this.innerHTML='<span class="fa fa-chain-broken" aria-hidden="true">';
          document.getElementById('importantList').style.display="block";
          document.getElementById('h1imp').style.marginBottom='0px';
          var importantList=document.getElementById('importantList').appendChild(item);
          this.parentNode.style.display="none";
        }
        else{
          var list=document.getElementById('list').appendChild(item);
          this.innerHTML='<span class="fa fa-chain" aria-hidden="true">';
        }
      }

      function makeDone(){
            var item= this.parentNode.parentNode,
                testClass = item.className;
              if(testClass=="done"){
                item.className="tasks";
                this.className="done-btn";
                this.innerHTML='<span class="fa fa-check-square-o" aria-hidden="true">';
          }
          else{
            item.className="done";
            this.className="done-btn-done";
            this.innerHTML='<span class="fa fa-check" aria-hidden="true">';
            var li_nodes = item.childNodes;
            li_nodes[1].style.display="block";
          }
      }

    };
