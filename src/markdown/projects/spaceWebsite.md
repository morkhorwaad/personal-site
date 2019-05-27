---
path: "/projects/space-website"
title: "SPACE Online"
link: "https://spaceinvt.com"
date: "05-18-2019"
---

The first product I build &mdash; that actually went live &mdash; was the website for SPACE. Full disclosure, this is a project I undertook for [my mom, Alice](https://aliceharwood.com) and was done with love pro bono (duh). 

To briefly outline the course of the project, I: 

- Worked with Alice to workshop and define core requirements for the site, and learned about her existing attendees
- Acquired all relevant pre-existing assets, including logos, pictures, email lists, and copy
- Mocked up layouts, reviewed and iterated on them, and finally implemented them as a Wix site
- Set up donations, email, and events
- Walked Alice through the processes of sending an email, creating an event, and editing text and images herself
- Deployed a website for SPACE!

## The request
Alice needed a website for her nonprofit organization SPACE, Inc &mdash; which, if you're wondering, is an acronym for _Spiritual, Practical, Artistic, Creative Education_. 

When she came to me with this request, the first thing I did was start up a shared document to brainstorm what she needed, wanted, and already had. We also came up with ideas on brand identity, customer personas, and some growth opportunities once the initial site was up. 

The core functionality requirements were straightforward: 

1. Inform visitors about what SPACE was, and why it existed;
2. Have a place to view upcoming events, and a way to book appointments; 
3. Be able to accept donations;
4. Link to other relevant sites, including [Alice's site](/projects/a-website-for-alice) and social media.

The organization was pre-existing, and had accumulated a list of event attendees/interested parties, so another soft ask was to have some way to integrate some email capability into the site. 

Finally, and perhaps most importantly, the final product needed to be something that Alice (or one of her friends) could have a dummyproof way of updating in the future; new events, emails, and copy, would need to be added eventually.


## Deciding on Wix

I knew immediately that this would be built using a website generator &mdash; it would be the safest way to ensure that Alice could maintain the site after I had handed over the keys. There are a lot of blog articles that exist already on the pros and cons of different services, so I won't get into that decision here, but we ended up going with [Wix](https://wix.com). 

This was an important decision because it didn't just make the site future-proof, it also answered two of my initial questions: 

- How are events going to be created/stored/viewable? 
- How will emails be sent and managed? 

While there may be better tools that answer these questions, SPACE is not a large-scale operation, and the out-of-the-box solutions provided by website building platforms are perfectly adequate. Expanding into third-party solutions like MailChimp or Eventbrite is relatively straightforward, so there is a path forward if need be. 

## Design 
With Wix decided on, the design was straightforward to start working with. Alice wanted to get _something_ up pretty quickly, so a lot of the design we let the base theme decide for us. 

Even with the base UI elements constructed, there was still the layout to construct, and modifications to ensure that we were staying consistent with the SPACE brand and values that we identified. 

### Website Layout
When the project was being discussed, I wanted to learn about the types of people attending SPACE events to inform the layout design. The very low-tech research technique of 'just asking Alice about the type of person coming through' made it clear that her attendees were generally on the older side of the spectrum, and less inclined to be online. 

This was relevant because I had all sorts of [extreme ideas in my head](https://hoverstat.es), and was quickly brought back down to earth realizing that it would have to be as friendly and understandable as possible. 

I had initially started using [balsamiq](https://balsqmiq.com) to put together pages, but realized that even that was unnecessary given the mostly static nature of the site. After switching to pen and paper, some designs were quickly agreed upon for the flow. 

The structure ended up being five actual pages: 

- A landing page, with a description of the two unchanging, monthly events, and a contact form at the bottom
- An about page, with links to 'friend' and 'sister' sites
- A page for upcoming events
- A page for bookable services
- A donation page 

Wix event and services modules took care of the page structure for the individual events/services booking pages, which made the rest easy to implement. 

## Implementation
Actually creating the site was done pretty easily thanks to the Wix builder. I scaffolded out the structure we had agreed upon, and sent the initial copy to Alice to review; there were some specific services and phrases that I wanted to make sure were accurate. 

After the site was put together, I made an event for the next recurring meetup, to make sure I could walk through the process of doing so with Alice. Once that was done, I assembled the bookable services, creating an availability schedule for her so that events would be booked according to her mandate. 

The mailing list that I was given was an excel sheet of people, phone numbers, emails, and addresses - and because it had been taken by hand, there were a lot of holes in the data. I wrote a little script that took this and transformed it into a CSV, with the holes patched with reasonable entries, that Wix could consume. 

Donations were the most fun to set up. Alice had a PayPal account that she had already been accepting payment from, and just wanted to add a link to let people complete the transaction on PayPal's website. This was click-and-drag, no problem. However, we also wanted to make sure people got a 'Thank You' email afterward from SPACE. To do this, I set up [Instant Payment Notification](https://developer.paypal.com/docs/classic/products/instant-payment-notification/). This is a PayPal feature that will send your service details on a transaction when it is made; all I had to do was make the service. 

Fortunately, [Corvid by Wix](https://support.wix.com/en/article/corvid-api-overview) makes it straightforward to set up API endpoints attached to your site. Using this, I was able to make a little endpoint that would listen for PayPal's IPN message, store the details in a Wix database, and send a templated email out to the donator. 

Finally, I did set up Google Analytics for the site. However, after talking with Alice, we realized that because the majority of her business is coming from word-of-mouth, it wouldn't be worth getting down-and-dirty with analytics and advertising at this time.

With all of these elements set up, the website was ready to go, and we published it to [spaceinvermont.org](https://spaceinvermont.org)!

## Next steps
The site has worked well! There are still a few things I would like to do for her when I have some spare time: 

- Make a native donation form 
    - Linking to PayPal is effective, but it would be nice to not have to leave the site to donate.
- Customize the booking service 
    - We had to make a lot of compromises setting up the booking services with the built-in Wix booking manager. This is because the events are day-long, multi-person, and would usually be booked by a group; something that really warrants a custom flow. We decided against this at first, to gauge the popularity of booking online, but it's something I would like to revisit at some point. 

## On to the next

With SPACE's site deployed, I went to work creating something for Alice herself, which you can read about [here](/projects/a-site-for-alice). 

If you're interested in having me work on a site for _you_, feel free to [get in touch!](/contact)