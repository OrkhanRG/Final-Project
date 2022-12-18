import React, { Component } from 'react'
import '../css/Contact.css'

export class Contact extends Component {
    render() {
        return (
            <div>
                <h1 className='h1'>Contacts</h1>
                <p className='p'>Vestibulum id nisl a neque malesuada hendrerit.
                    Mauris ut porttitor nunc, ut volutpat nisl.
                    Nam ullamcorper ultricies metus vel ornare.
                    Vivamus tincidunt erat in mi accumsan, a sollicitudin risus vestibulum.
                    Nam dignissim purus vitae nisl adipiscing ultricies. Pellentesque in porttitor tellus.
                    Integer fermentum in sem eu tempus. In eu metus vitae nibh laoreet sollicitudin et ac lectus.
                    Curabitur blandit velit elementum augue elementum scelerisque.
                </p>
                <hr className='hr1'></hr>
                <h2 className='h2'>Contact Us</h2>
                <form>
                    <input name="name" type="text" class="feedback-input" placeholder="Name" required/>
                    <input name="email" type="mail" class="feedback-input" placeholder="Email" required/>
                    <input name="text" type="text" class="feedback-input" placeholder="Subject" />
                    <textarea name="text" class="feedback-input" placeholder="Message" required></textarea>
                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        )
    }
}

export default Contact