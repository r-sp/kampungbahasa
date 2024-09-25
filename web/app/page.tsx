import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kampung Bahasa",
  description: "FKB's proposal to help with its digital transformation",
};

export default function Homepage() {
  return (
    <article className="prose prose-h1:tracking-tight px-4 py-6">
      <h1>A place to learn, practice and improve your speaking</h1>
      <p>
        <strong>Are you seeking to elevate your speaking abilities?</strong> Whether you're
        preparing for a formal presentation, a job interview, or simply aiming to refine your
        everyday communication, a plethora of resources are available to assist you in achieving
        your goals.
      </p>
      <section>
        <h2>Online Platforms and Applications</h2>
        <p>
          <strong>Language learning platforms</strong>: Duolingo, Memrise, and Babbel offer
          interactive exercises, pronunciation drills, and conversation practice to enhance
          fluency in diverse languages.
        </p>
        <p>
          <strong>Speech therapy applications</strong>: Apps like SpeechEasy and MyVoice can aid
          individuals with stuttering or other speech challenges.
        </p>
        <p>
          <strong>Online language exchange platforms</strong>: Websites such as Tandem and
          HelloTalk connect you with native speakers for conversation practice.
        </p>
      </section>
      <section>
        <h2>Local Communities and Groups</h2>
        <p>
          <strong>Toastmasters International</strong>: This organization provides a supportive
          environment for individuals to develop their public speaking and leadership skills.
        </p>
        <p>
          <strong>Language exchange groups</strong>: Many cities have language exchange groups
          where you can meet people from different cultures and practice your language skills.
        </p>
        <p>
          <strong>Community centers and libraries</strong>: These often offer language classes,
          book clubs, and other activities that can improve your speaking skills.
        </p>
      </section>
      <section>
        <h2>Professional Tutoring and Coaching</h2>
        <p>
          <strong>Private tutors</strong>: A private tutor can provide personalized instruction
          and feedback to help you improve your speaking skills.
        </p>
        <p>
          <strong>Speech coaches</strong>: Speech coaches can assist you with pronunciation,
          articulation, and overall delivery.
        </p>
      </section>
      <section>
        <h2>Strategies for Improving Your Speaking Skills</h2>
        <p>
          <strong>Consistent practice</strong>: The more you speak, the more confident you'll
          become.
        </p>
        <p>
          <strong>Self-recording</strong>: Listening to your own voice can help you identify
          areas for improvement.
        </p>
        <p>
          <strong>Seeking feedback</strong>: Ask friends, family, or a teacher for their honest
          feedback.
        </p>
        <p>
          <strong>Joining a conversation group</strong>: Practicing speaking with others can
          help you build confidence and improve your fluency.
        </p>
        <p>
          <strong>Utilizing a variety of resources</strong>: Experiment with different learning
          methods to find what works best for you.
        </p>
      </section>
      <p>
        By leveraging these resources and practicing regularly, you can significantly enhance
        your speaking skills and boost your confidence.
      </p>
    </article>
  );
}
