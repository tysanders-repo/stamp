---
title: "Engineering Without Borders Website"
date: 2024-01-15
description: "A team project to design a functional website for Texas A&M's Engineering Without Borders chapter."
category: "Software"
tags: ["Ruby on Rails", "Agile", "Next.js", "CI/CD"]
featured: true
year: "2024"
---

A team project to design a functional website for Texas A&M's Engineering without Borders chapter.
This class was a continuance of software engineering I that I took the previous semester. Unlike software engineering I, this class was an elective which meant the class was far more open ended and project focused.

My team and I first met with our client two weeks into the course. Since we were to follow the agile development process, we started by outlining the customer's requirements. Some of those requirements were:

#### Requirements

- The website should have a central page that contains all the information about the chapter, to allow for potential new members (PNMs) to learn about the chapter.
- The bottom of this page should have self populating cards that display the chapter's projects, each card should represent a project and be creatable/editable/destroyable by the admin/project manager.
- The website should feature tiered access. Roles include: admin, project manager, treasurer, member, and guest.
- The website should have a page for each project that contains information about the project, including a description, a list of members, and a list of events.
- Organization admins should be able to manage members, including sending PNM invites.
- A PNW invite should link to a form that allows the PNM to fill out their first time information.
- The website should have a page for each event that contains information about the event, including a description, a list of members, and a list of projects.

#### Discussion

We settled on these requirements after discussing the client's needs and the scope of the project. The client proposed some features that were not in the scope of the project (due to time constraints) such as a social media aspect and a way to track the chapter's finances. We were able to set these as stretch goals and moved forward to the next step.

#### Class requirements
As discussed before, we had a lot of flexibility in this project. Our only requirements were to use the agile development process and to use Ruby on Rails. This was added by our professor as a way to ensure we were all on level footing as no one knew the framework before the class started.

### Development

#### Sprint 1 - Planning
Our first sprint planning meeting itemized our core tasks into 50 or so user stories. We broke some of these into smaller tasks and assigned each of them story points.

> **Story Points**  
> An abstract unit of measure used to estimate the relative effort or complexity required to complete a task. By avoiding exact time estimates, story points help teams focus on effort rather than hours or days.

> **User Story**  
> A description of a feature or functionality that a user wants to see in the application.  
> Designed from a user's perspective, they are written in the user's language, such as "As a user, I want to be able to login to the website so that I can access my account."

We then used the user stories to create a burndown chart. This chart is a visual representation of the progress of the project over time. It is a helpful tool to track the progress of the project and to identify any potential issues.

#### Sprint 1 - Development
Sprint 1 was mostly about building the foundation of our app. We built the very first database schema and worked to build the backend with rails. The front end, we decided, would be built in React (Later changed to Next.js).

#### Sprint 1 - Review

As we neared the end of the sprint, we had a review meeting with the client. Although we had little in the way of visible progress, he was happy with the product so far. 


#### Sprint 2
The first few days of sprint 2 were enough to get the backend working almost to its final version. Therefore, the majority of sprint 2 was spent on the front end. The most important thing we did in this sprint was to set up CI/CD pipelines to ensure that the code was always in a deployable state. We used Heroku for our deployment, and GitHub actions for testing via rspec, rubocop, brakeman, and jest for frontend testing.

#### Sprint 3
Sprint 3, our last sprint, was spent on the final touches. We added final features, overlayed existing systems with a component library (MUI), and overhauled testing and code coverage.

### Results

The project was a success. We were able to deliver a functional website that met the client's requirements. The client was happy with the product and we were able to get a good grade in the class.

#### Lessons Learned

This was not the first time I had worked on a project with a team, nor was it the first time I had used the agile development process. However, it was the first time where I had to rely on the process and it wasn't just a hindrance or high level exercise for the sake of it. In former projects, development had been so straight forward that agile and the process it requires really just took away from development time. Additionally, in lower classes (for understandable reasons) we were not required to define the project scope and requirements. We were also not graded on how well we completed our goals, rather just the final product. This meant that we could just focus on the end result and not the process. In this project, since we had a client and therefore explicitly had to meet his requirements, we had to rely on the process to ensure we were on track.

I think the biggest lesson I learned was the importance of the process. When our project ran into walls was almost always due to a lack of foresight in planning. For instance, if we had failed to lay out dependencies between features/stories correctly or failed in our estimates of the story points, we would almost certainly be stuck waiting on other stories to be completed. Similarly, if we had not properly defined the project scope and requirements, we would have been stuck trying to figure out what to build. This means the worst our meetings the more meetings we had (no one *really* likes meetings after all).

#### Conclusions

This project was without a doubt **critical** in my development as a software engineer. Even on a reasonably smaller project such as this, we were shown first hand why agile software is used and how we can use it to our advantage instead of just being a hindrance.

### Links

- [Github Repository](https://github.com/tysanders-repo/border-502-project)
