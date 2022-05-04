import React, { useState } from 'react';
import { Button, Input, Icon, TextArea, confirmPopup } from 'common';
import { addContact } from 'api/contact';

const Contact = ({ user }: { user: User }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const formatedPhone = user.phone?.replace(/[^0-9]+/g, '');
  const encodedAddress = encodeURIComponent(user.address);

  const sendContact = async () => {
    try {
      if (!email || !name) {
        confirmPopup({
          header: 'Send Contact Failed',
          confirmation: 'Please input email and name first!',
          isMessage: true,
        });
        return;
      }

      const isAccepted = await confirmPopup({
        header: 'Send Contact Confirmation',
        confirmation: 'Are you sure to contact me with those information?',
      });
      if (!isAccepted) return;

      const result = await addContact({ email, name, description });
      if (result) {
        confirmPopup({
          header: 'Send Contact Successfully',
          confirmation:
            'Thanks for getting in touch! I sent you an email for confirmation.',
          isMessage: true,
        });
        setEmail('');
        setName('');
        setDescription('');
      } else {
        throw {};
      }
    } catch (e) {
      confirmPopup({
        header: 'Send Contact Failed',
        confirmation:
          'This is my problem. Kindly use other ways to contact me.',
        isMessage: true,
      });
    }
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-lg-5 col-12">
            <div className="google-map w-100">
              <iframe
                src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                width="400"
                height="300"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </div>

            <div className="contact-info d-flex justify-content-between align-items-center py-4 px-lg-5">
              <div className="contact-info-item">
                <h3 className="mb-3 text-white">My information</h3>
                <p className="footer-text mb-0">{user.phone}</p>
                <p>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
              </div>

              <ul className="social-links">
                {user.github && (
                  <li>
                    <a
                      target="_blank"
                      href={user.github}
                      title="github"
                      rel="noreferrer"
                    >
                      <Icon icon="uil:github" width="24" />
                    </a>
                  </li>
                )}
                {user.linkedin && (
                  <li>
                    <a
                      target="_blank"
                      href={user.linkedin}
                      title="linkedin"
                      rel="noreferrer"
                    >
                      <Icon icon="uil:linkedin" width="24" />
                    </a>
                  </li>
                )}
                {formatedPhone && (
                  <li>
                    <a href={`tel:${formatedPhone}`} title="phone">
                      <Icon icon="uil:phone" width="24" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-12">
            <div className="contact-form">
              <h2 className="mb-4">
                {'Interested to work together? Let\'s talk'}
              </h2>

              <div>
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <Input
                      autoComplete="nope"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                      }
                    />
                  </div>

                  <div className="col-lg-6 col-12">
                    <Input
                      autoComplete="nope"
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                      }
                    />
                  </div>

                  <div className="col-12">
                    <TextArea
                      autoComplete="nope"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setDescription(e.target.value)
                      }
                    />
                  </div>

                  <div className="col-lg-5 col-12">
                    <Button mode="submit" onClick={sendContact}>
                      Send Contact
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
