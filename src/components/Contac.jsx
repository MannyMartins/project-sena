import React from 'react'

const Contac = () => {
  return (
    <section id="contacto" class="content contact  bg-gray-800">
        <article class="contain">
            <h2 class="title">Contacto</h2>
            <p class="text">En Amarok, estamos aquí para ayudarte. Si tienes alguna pregunta o necesitas más información sobre nuestros servicios, no dudes en ponerte en contacto con nosotros.</p>
            <div class="contact-container">
                <form class="contact-form">
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                    </div>
                    <div class="form-group">
                        <label for="email">Correo Electrónico:</label>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje:</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn-submit">Enviar</button>
                </form>
            </div>
        </article>
    </section>
)
}

export default Contac