'use client'
import Image from "next/image"

export default function Contact() {
  return (
    <div className="container py-5">
      
      <div className="d-flex flex-wrap align-items-center gap-4">

        {/* IMAGE */}
        <div className="flex-fill text-center">
          <Image
            src="/img/25164 (1).jpg"
            alt="Contact"
            className="img-fluid rounded shadow"
            style={{ maxWidth: '400px' }}
            width={667}
            height={1000}
          />
        </div>

        {/* FORMULAIRE */}
        <div className="flex-fill">
          <h2 className="mb-4">Contactez-nous</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Nom</label>
              <input type="text" className="form-control" placeholder="Votre nom" />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Votre email" />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows={5} placeholder="Votre message"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Envoyer
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}