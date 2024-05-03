import React from "react";

//components
import HeroBanner from "../../components/HeroBanner";
import DocumentList from "../../components/DocumentList";
import FAQ from "../../components/FAQ";

//images
import HeroImage from "../../images/sea.jpg";
import CallUs from "../../images/call-us.svg";
import Email from "../../images/email.svg";
import TextUs from "../../images/text-us.svg";
import FeedbackForm from "../../components/FeedbackForm";

const FAQArray = [
  {
    title:
      "What is the difference between the Employee Engagement Platform and the HR Management System?",
    description:
      "The Employee Engagement Platform is tailored to help you nurture a positive work environment, foster teamwork, and boost employee morale. Conversely, the HR Management System focuses on streamlining administrative tasks like hiring, payroll, and performance evaluations, allowing you to efficiently manage your human resources.",
  },
  {
    title:
      "Can I customize the templates provided in the Customizable HR Template?",
    description:
      "Absolutely! Our Customizable HR Template empowers you to personalize HR documents to reflect your company's unique brand and policies. Whether it's employee handbooks, offer letters, or performance review forms, you have the flexibility to tailor them to your specific needs.",
  },
  {
    title:
      "How do I access training resources on the Training & Development Resources platform?",
    description:
      "Accessing our Training & Development Resources is straightforward. Simply log in to your account and explore our extensive library of courses, tutorials, and learning materials. From leadership training to technical skills development, there's something for every member of your team.",
  },
  {
    title:
      "Can I integrate the Team Collaboration Tools with other project management software?",
    description:
      "Yes! Our Team Collaboration Tools are designed to seamlessly integrate with popular project management software, ensuring smooth workflows and efficient collaboration. Whether you use Trello, Asana, or Jira, our tools complement your existing setup, enhancing productivity and teamwork.",
  },
  {
    title:
      "What kind of analytics can I expect from the Data Analytic Dashboard?",
    description:
      "Our Data Analytic Dashboard provides insightful analytics tailored to your business needs. From employee engagement metrics to HR performance indicators, you'll gain valuable insights that drive strategic decision-making and foster continuous improvement across your organization.",
  },
  {
    title:
      "Is there a limit to the number of users I can have on the Employee Engagement Platform?",
    description:
      "No, there's no limit to the number of users on our Employee Engagement Platform. Whether you're a small startup or a large enterprise, our platform scales effortlessly to accommodate your entire team, fostering collaboration and engagement at every level.",
  },
  {
    title: "How do I contact support for assistance with system integration?",
    description:
      "If you need assistance with system integration, our dedicated support team is here to help. Simply reach out through our online support portal, and our experts will guide you through the integration process, ensuring a seamless experience tailored to your business requirements.",
  },
];

const documentArray = [
  {
    title: "Call Us!",
    imagePath: CallUs,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Email Us!",
    imagePath: Email,
    linkPath: "/GoMyTeam/placeholder-page",
  },
  {
    title: "Text Us!",
    imagePath: TextUs,
    linkPath: "/GoMyTeam/placeholder-page",
  },
];

export default function OnlineSupport() {
  return (
    <>
      <HeroBanner
        title="Online Support"
        description="Get the assistance you need, when you need it. Our dedicated online support team is here to provide quick and reliable solutions to your queries and concerns. Whether it's troubleshooting technical issues or seeking guidance on product features, we're just a click away to ensure you have a seamless experience with our products."
        buttonText="Call Us Now >>"
        imagePath={HeroImage}
      />
      <DocumentList
        title="Any questions? Reach out to us now!"
        documentArray={documentArray}
      />
      <FAQ FAQArray={FAQArray} />
      <FeedbackForm />
    </>
  );
}
