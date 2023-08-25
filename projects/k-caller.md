---
title: 'K-Caller: A Game-Changing Solution'
date: '2023-08-24'
description: 'Explore the journey of a dedicated "girl dad" and softball coach as he innovates a game-changing pitch-calling system, K-Caller. Learn about its intuitive algorithm and seamless integration with Next.js and Firestore, and discover the future prospects of this revolutionary softball tool.'
image: 'k-caller-01.jpg'
---

![K-Caller](/images/k-caller-01.jpg)

Apart from my professional life, I'm a proud father, a "girl dad" to be specific. I'm blessed with a twelve-year-old and a six-year-old, both of whom share a profound love for softball. It's a passion that's deeply rooted in our family; in fact, I coach my eldest daughter's team. My younger daughter has already taken up the sport, following in her sister's footsteps.

My elder daughter, a commendable pitcher, has worked hard to hone her skills. Her prowess has led her to invitations to play throughout Ohio and its neighboring regions. During one of our winter tournaments, I was introduced to a pitch-calling system. It was simple and intuitive: the coach would call out a number, and the girls would refer to a grid on their wristbands to know their next move. This system intrigued me, and as I learned more, I began to see the potential for creating something similar, especially considering the hefty price tag attached to the existing software.

After researching existing sign systems, most of which had similar functionalities, I embarked on the journey to build my own.

### The Algorithm:
The heart of K-Caller is its algorithm. Primarily for pitching, it lets users input multiple pitches, such as fastball, changeup, curveball, and more. Users can assign a percentage to each pitch, ensuring the total sums up to 100%. The system then strategically places these signs on a user-defined grid and stores them for future use.

### The Persistence Layer:
With [Next.js](https://nextjs.org/) at the helm, I developed a backend logic that facilitated CRUD operations, allowing users to create, read, update, and delete signs. These signs were then saved to [Firestore](https://firebase.google.com/docs/firestore) under the user's profile, ensuring easy retrieval and reprinting. Additionally, by integrating [NextAuth](https://next-auth.js.org/), the platform instantly benefitted from a reliable authentication mechanism.

The result? A system that worked flawlessly. Our team seamlessly adopted K-Caller throughout the summer, streamlining communication without the hassle of intricate hand gestures and reducing the risk of sign theft.

### The Future of K-Caller:
While K-Caller has proven its worth, there's room for expansion. I aim to refine the UI (currently powered by [MaterialUI](https://mui.com/)) and introduce new features. Enhancing the authentication process is also on the agenda. My vision is to evolve K-Caller into a platform accessible to softball enthusiasts everywhere.