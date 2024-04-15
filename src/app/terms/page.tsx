import { NextPage } from 'next';


interface Props {}

interface ITermsOfService {
    items: {
      title: string;
      text: string;
      moreParagraph?: {text:string}[]
    }[];
  }

  const termsOfService: ITermsOfService = {
    items: [
      {
        title: "LEGAL",
        text: "ColombiaXclusive’s website has been compiled in good faith. It provides information of a general nature about the company, services and products. While ColombiaXclusive has taken reasonable steps to ensure that such information is accurate, the company makes no warranties or representations – expressed or implied – regarding the accuracy and completeness of this website and its information, or any websites linked to this website. Users of this website, its information and any websites linked to this website must rely solely on their own assessment and verification. Neither ColombiaXclusive, nor the company’s affiliates, officers and employees, shall be responsible or liable for any direct, indirect, incidental, consequential or special loss or damages however arising (whether by negligent act, omission or otherwise) out of the use of, or reliance upon, this website and its information, or any websites linked to this website.",
      },
      {
        title: "LIABILITY",
        text: "ColombiaXclusive warrants to you that ColombiaXclusive shall use its reasonable endeavors to provide the services with reasonable care and skill and, as far as reasonably possible, in accordance with your request and instructions from time to time. Where ColombiaXclusive supplies you with any goods or services supplied by a third party, then ColombiaXclusive is acting as your agent in sourcing the goods or services. ColombiaXclusive will use reasonable care in selecting the supplier and ensuring the order is placed in accordance with your wishes. For the avoidance of doubt, ColombiaXclusive does not and will not provide any representations or recommendations in relation to any of the information and suggestions comprised within the services. You are deemed to be responsible for, and shall use your own skill and judgment as to, the quality, value and suitability of such information and suggestions in relation to deciding whether to enter into any contract with any third party for the supply of services or sale of goods.",
        moreParagraph: [
            {
                text: "Your contract for the purchase of products or services is made with the relevant supplier/partner/vendor only. ColombiaXclusive acts as an agent for the supplier/partner/vendor and, unless expressly provided otherwise, all your rights and remedies are against the supplier/vendor/partner. ColombiaXclusive will not be responsible for products and services offered by ColombiaXclusive as agents for the suppliers/vendors/partners or for any aspect of the relationship between you and any particular supplier/vendor/partner. ColombiaXclusive will however do everything it reasonably can to assist you in any dealings you have with the supplier/vendor/partner."
            },
            {
                text: "You agree that any contract entered into by you with any of the suppliers/vendors/partners is an independent contract. ColombiaXclusive hereby disclaims any and all liability for any act or omission of any supplier/vendor/partner or any loss incurred by you as a result of any act or omission of a supplier/vendor/partner whether or not arranged through ColombiaXclusive. ColombiaXclusive accepts no liability for any losses or claims arising from any inability to access the website or any failure to complete a transaction."
            },
            {
                text: "Save in respect of death and personal injury caused by the negligence of ColombiaXclusive or as expressly provided for in these Terms and Conditions, ColombiaXclusive shall not be liable for any loss, cost, expense or damage of any nature whatever (whether direct or indirect) resulting from the provision of the services or your reliance upon the information and suggestions provided by ColombiaXclusive hereunder and the resulting supply of goods and services to you by any third party. ColombiaXclusive shall have no liability to you for any loss, damage, costs, expenses or other claims for compensation arising from requests or instructions supplied by you which are incomplete, incorrect or inaccurate or arising from their late arrival or non-arrival, or any other fault of you. ColombiaXclusive shall not be liable to you or be deemed to be in breach of these Terms and Conditions by reason of any delay in performing, or any failure to perform, any of ColombiaXclusive’s obligations in relation to the services, if the delay or failure was due to any cause beyond ColombiaXclusive’s reasonable control."
            },
        ]
      },
      {
        title: "COPYRIGHT NOTICE",
        text: "ColombiaXclusive’s website and its information are protected by copyright, trademark and other intellectual property laws unless otherwise indicated and is the sole property of ColombiaXclusive. Any unauthorized use, copying, rewriting, publication, broadcasting, distribution or exploitation of this website and its information is strictly prohibited by ColombiaXclusive. You may display or print this website and its information solely when visiting and in the usual operation of your web browser. All names, logos and trademarks on this website are owned by ColombiaXclusive or by a third party which has granted ColombiaXclusivee the right to use them on this website. The use or misuse of these names, logos and trademarks is strictly prohibited by ColombiaXclusive. Nothing contained herein shall be construed as granting the user of this website the right to use any names, logos and trademarks on this website without the written permission of the owner.",
      },
      {
        title: "ACCEPTANCE ",
        text: "By using this website and its information, you irrevocably and unconditionally accept and agree to be bound by this legal disclaimer and copyright notice. ColombiaXclusive reserves the right to change, add or remove any information presented on this website without notice. Your continued use of this website following the posting of such changes means that you accept such changes.",
      },
    ],
  };

const TermsPage: NextPage<Props> = ({}) => {
  return(
  <main className="container w-11/12 mx-auto mb-9 flex flex-col xl:px-60 gap-4 text-justify">
  <h1 className="text-black text-5xl font-bold mt-10 mb-5">
    TERMS OF SERVICE
  </h1>

  <div className="flex flex-col gap-4">
    {termsOfService.items.map((item) => (
      <div key={item.title} className="flex flex-col gap-2">
        <h2 className="font-semibold">{item.title}</h2>
        <p>{item.text}</p>
        {item.moreParagraph &&
            item.moreParagraph.map((paragraph, index) => (
                <p key={index}>{paragraph.text}</p>
            ))
        }
      </div>
    ))}
  </div>
</main>
  )
}

export default TermsPage