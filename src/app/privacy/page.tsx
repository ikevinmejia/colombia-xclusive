import { NextPage } from "next";

interface IPrivacyPolicy {
  mainDescription: string;
  secondDescription: string;
  items: {
    title: string;
    text: string;
  }[];
}

const privacyPolicy: IPrivacyPolicy = {
  mainDescription:
    "Your Privacy is one of ColombiaXclusive's highest priorities. We believe that your privacy means more than just the security of your information; it means the total protection of your lifestyle and peace of mind. We have established this privacy statement in order to demonstrate our commitment to our clients privacy. This privacy statement denotes our information gathering and dissemination practices; along with our privacy policies relating to the personally identifiable information you submit to us while on our site. Personally identifiable information refers to any information that can be used to identify you such as your name or email.",
  secondDescription:
    "By using this site, you agree to this privacy policy. ColombiaXclusive is the sole owner of the information collected on http://www.ColombiaXclusive.com ColombiaXclusive collects personally identifiable information from our users at several different points on our Web site.",
  items: [
    {
      title: "QUOTES",
      text: "If you request a quote or service from us, we request certain personally identifiable information from you on our quote form. You must provide contact information such as name, email and phone number. The information you enter on our quoting system is stored by us. We use this information for quoting purposes and to contact you to communicate the quotes to you via phone or via email so as to process and service your request.",
    },
    {
      title: "CUSTOMER SERVICE",
      text: "We will communicate with you in response to your inquiries, to provide the services you request, and to manage your account. We will communicate with you by email or telephone, in accordance with your wishes based on the information you provide us when you make a service request, or contact us via email or phone.",
    },
    {
      title: "PROFILE",
      text: "We store information that we collect through cookies, and log files, to create a “profile” of your preferences to enhance your user experience on our site & remember your information so you don't have to enter it each time you're on our site. We do not share your profile with any third parties for their promotional purposes.",
    },
    {
      title: "LEGAL DISCLAIMER",
      text: "We reserve the right to disclose your personally identifiable information as required by law and when we believe that disclosure is necessary to protect our rights and or to comply with a judicial proceeding, court order, subpoena or legal process served on our Web site.",
    },
    {
      title: "LOG FILES",
      text: "As is true of most Web sites, we gather certain information automatically and store it in log files. This information includes internet protocol (IP) addresses, browser type, internet service provider (ISP), referring exit pages, operating system, date/time stamp, and click stream data. We use this information, which does not identify individual users, to analyze trends, to administer the site, to track users' movements around the site and to gather demographic information about our user base as a whole. We do not link this automatically collected data to personally identifiable information. We use a third-party tracking service called Google analytics that uses log files to track non-personally identifiable information about visitors to our site in the aggregate to track visitor usage, statistics and behaviors to help us better understand how to improve user experience on the website.",
    },
    {
      title: "COOKIES",
      text: "A cookie is a small text file that is stored on a user's computer for record-keeping purposes. When you interact with the Site, we try to make that experience simple and meaningful. When you visit our Site, our Web server sends a cookie to your computer. Cookies are files that Web browsers place on a computer's hard drive and are used to indicate whether you have visited the Site previously. Choices about Cookies: You can configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is set. (Each browser is different, so check the “Help” menu of your browser to learn how to change your cookie preferences.) If you reject all cookies, you will still be able to use ColombiaXclusive though you may not have the most enhanced experience of using our site. We use cookies for a number of purposes, including to: remember your quote information so that we can provide you with customized content; keep track of preferences you specify while you are using our site; estimate and report our total audience size and traffic; and conduct research to improve the user experience on our site.",
    },
  ],
};

interface Props {}

const PrivacyPage: NextPage<Props> = ({}) => {
  return (
    <main className="container w-11/12 mx-auto mb-9 flex flex-col xl:px-60 gap-4 text-justify">
      <h1 className="text-black text-5xl font-bold mt-10 mb-5">
        PRIVACY POLICY
      </h1>
      <p>{privacyPolicy.mainDescription}</p>
      <p>{privacyPolicy.secondDescription}</p>

      <div className="flex flex-col gap-4">
        {privacyPolicy.items.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h2 className="font-semibold">{item.title}</h2>
            <p >{item.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PrivacyPage;
