import React from 'react'
import Avatar from '../../components/avatar/avatar.component'
import Message from '../../components/message/message.component'
import Footer from '../../layout/footer/footer.layout'

const ChatBox = () => {
  return (
    <section style={{backgroundColor: "#eee"}}>
    <div className="container py-5">
  
      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-lg-8 col-xl-6">
  
          <div className="card" id="chat2">
            <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: "relative", height: "400px"}}>
  
              <div className="d-flex flex-row justify-content-start">
               <Avatar imageUrl={"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"}/>
                <div>
                  <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Hi, how are you?</p>
                
                  <p className="small ms-3 mb-3 rounded-3 text-muted">23:58</p>
                </div>
              </div>
  
           
  
           <Message/>
  
  
            </div>
           <Footer/>
          </div>
  
        </div>
      </div>
  
    </div>
  </section>
  )
}

export default ChatBox