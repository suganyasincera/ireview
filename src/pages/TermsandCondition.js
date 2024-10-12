import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import '../App.css';

function TermsandCondition({ show, handleClose, onAccept }) {
  return (
    <div>
    <Modal show={show} onHide={handleClose}dialogClassName="modal-90w"
        fullscreen="true" size="xl">
      <Modal.Header closeButton>
        <Modal.Title style={{color: "#50C878",
    fontWeight: 500,
    fontSize: 25}}>Terms and Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Insert your Terms and Conditions here */}
        <div>
        
          <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
          1) General</p> 
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) Thank you for visiting our Web Application.This online Platform is owned by 
iRe-view.ai LLC, a Delaware Limited Liability Company, having its registered office at 
Delaware, 508 Main Street,Wilmington ,Zipcode-19804. Our Platform enables users to use artificial intelligence to review and 
understand the content of their contracts like employment agreements, consulting 
agreements, terms of employment etc. effortlessly with the click of a button. Our Platform 
enables users to give their informed consent while entering into new contracts and 
understanding clauses contained in their existing contracts with ease (“Services”). <br/> <br/> 
b) For the purpose of these terms of use (“Terms of Use” or “Agreement”), “We”, “Us” and 
“Our” means the Company and “You”, “you”, “Your”, “your” and “User” means any person 
who accesses or uses the Platform or Our Services. “Services” include access to Our Platform
and AI enabled contract review services. <br/> <br/> 
c) Please read these Terms of Use carefully. By downloading or accessing or using Our Platform
or Services, You agree to be bound by these Terms of Use and Our other policies made 
available on the Platform, including but not limited to our Privacy Policy (“Policies”). If You 
do not agree to these Terms of Use or Our Policies, please do not use the Services or access 
the Platform. The Terms of Use form a legally binding contract between You and the 
Company and define the terms and conditions under which You are allowed to use the 
Platform. This Agreement supersedes all previous oral and written terms and conditions (if 
any) communicated to You relating to Your use of the Platform to avail the Services. By 
availing any Service, You signify Your acceptance of the terms of this Agreement. <br/> <br/> 
d) IF YOUR LEGAL RIGHTS HAVE BEEN INFRINGED OR YOU HAVE A LEGAL CAUSE OF ACTION, 
YOU ARE INSTRUCTED TO CONSULT A LICENSED LAWYER OF YOUR CHOICE. Our Platform
and Services are not designed to address situations requiring intervention of law 
enforcement officials or litigation.
              </p>
              <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
              2) Acceptance of the Terms of Use</p> 
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          You must be 18 years of age or older to register, use the Services, or visit or use the Platform
in any manner. By registering, visiting and using the Platform or accepting this Agreement, 
You represent and warrant to Us that You are 18 years of age or older, and that You have 
the right, authority and capacity to use the Platform and the services available through the 
Platform, and agree to and abide by this Agreement. You may, if You are a parent/legal 
guardian of a minor (child below 18 years of age), access the Services on behalf of such 
minor, subject to compliance with and acceptance of these Terms of Use. If You do not 
agree to the Terms of Use, do not use any of Our services. 
          </p>
          <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
          3) Changes to the Terms of Use</p> 
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          a) We may modify these Terms of Use and Our Policies from time to time, by updating this 
document. Your continuing to use the Platform or Services following the posting of changes 
will mean that You accept such changes. <br/> 
b) The Services may change from time to time, at the sole discretion of the Company, and the 
Terms of Use will apply to Your access to and use of the Platform to avail the Service, as well 
as to all information provided by You on the Platform at any given point in time. 

          </p>
          <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
          4) Your Information</p> 
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          a) In order to use the Services, You may register on the Platform by creating an account 
(“Account”) and populating it with Your name, date of birth, gender, contact number, email 
address and such other information as shall be required. These are Your unique credentials 
for accessing the Services that are only available to members or end users of the Services.
We use this information to communicate with You, help you avail services on the Platform, 
and provide You with information regarding Our Services. We reserve the right to share the 
information provided by You with third party sub-contractors/ vendors to provide the 
Services to you and store such information and/or conversation with such third parties, in 
accordance with our Privacy Policy. <br/> <br/> 
b) In order to facilitate Your Services, We will require you to upload soft copies of your contract 
and/or legal documents that you wish to review. This information is collected to enable the 
Platform to better respond to your needs and best inform you about your contractual rights, 
duties, legal representations, warranties and all unique contractual obligations contained in 
Your contracts. We may by Our Services, collect information relating to the devices through 
which You access the Platform. Further, we will require Your location and may track it 
through GPS signals, device sensors, Wi-Fi access points, and cell tower ids that can be used 
to derive or estimate precise location in order to offer to You Services relevant to you. All 
such information that You provide in the process of registering on the Platform and upload 
to the application or post as a query, including the query itself, is “User Information”. The 
collected information will be used only for improving the quality of Our Services and to build 
new services. <br/> <br/> 
c) Customer’s Informed, Free and Unqualified Consent allowing us to receive, share and use 
your information to facilitate the service desired by you- You hereby give us your informed 
consent to receiving your Personally Identifiable Information (PII) namely their name, mobile 
number, email ID, address etc. for the purpose of facilitating the Services desired from us by 
You. You hereby give us your informed consent to sharing your above mentioned PII with our 
service providers and the vendors who will be rendering the Services or components of the 
Services to You. We hereby confirm that we or our subcontractors shall not use the PII 
shared by You for any purpose other than for the facilitation of the Service to You. We 
confirm that we and our service providers shall not retain your PII for longer than ten (10)
years from the date of last receipt of Service by You. Your informed free consent is a 
mandatory pre-requisite for availing any of the legal rights awareness services offered by us. 
<br/> <br/> 
d) When You create an Account on the Platform, We will send You a link, through email and/or 
SMS, to confirm Your email address or Your mobile number as provided to Us. Upon 
confirmation, You will be able to upload your contracts on our Platform and derive contract 
summary and contract terms analysis reports which will help you review your contracts like 
an expert and will assist you in understanding your contractual rights and duties better.
<br/> <br/> 
e) You shall be responsible for maintaining the confidentiality of the Your account access 
information and password. You shall be responsible for all usage of the User’s account and 
password, whether or not authorized by You. You shall immediately notify Us of any actual 
or suspected unauthorized use of Your account or password. Although We will not be liable 
for Your losses caused by any unauthorized use of Your account, You may be liable for Our
or such other parties as the case may be, losses, due to any unauthorized use of Your 
account.

          </p>

          <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
          5) By providing Us with Your User Information, You confirm that:</p> 
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          a) The User Information provided by You belongs to You and is accurate and genuine, to the 
best of Your knowledge; <br/> <br/> 
b) The phone number provided by You belongs to You, has been validly acquired under 
applicable law, that You may be contacted on the number by way of calls or SMS, Watsapp
messages by Us or our sub-contractors even if Your Number has been registered on the ‘Do 
Not Call’ registry. In the event Your number is registered with the ‘Do Not Call’ Registry, we 
recommend that You unblock the ‘Legal Education’ category from the ‘Do Not Call’ Registry; 
and <br/> 
i) In the event, you upload User Information of other users You are duly authorized by 
such other user or are the designated guardian of such User under applicable law. <br/> 
ii) You shall immediately notify Us of any unauthorized use of Your User Information or any 
other breach of these Terms of Use or security known to You. 
           </p>

           <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
           6) Further, You authorize Us to:</p> 
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          a) Collect, process and store User Information and access information including the IP address, 
type of operating system, geo-location, device ID, type of device, IMEI number and MAC 
address of the computer/device from where the Platform were accessed; <br/> <br/> 
b) Either directly, or through third parties, verify and confirm Your User Information;<br/> <br/>  
c) Contact You using Your User Information, including for marketing and promotional calls; and
<br/> <br/> 
d) Share Your User Information with our employees, advisors, vendors, sub-contractors, 
affiliates and assigns who will use the same to enable your Services.<br/> 
Subject to the above, and Your compliance with these Terms of Use, We grant You a non-
exclusive, revocable, limited privilege to access and use the Platform and the Services.
           </p>

           <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
           7) AI enabled Contract Review Services</p>
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          a) The Platform is designed to support the legal contracting decisions and choices that You 
make. These decisions and choices are Yours, and We believe that You, with the advice You 
receive from Your Lawyer, are the best decision maker about Your legal and contractual 
relationships. What We can do is help You navigate the difficult to understand legal jargon 
and terminology contained in Your agreements and contracts using artificial intelligence, so 
that you can identify the important clauses contained in your Agreements and understand 
their meaning and effect on your situation.<br/> <br/> 
b) You may post a general query regarding Your contract requiring review or interpretation. 
<br/> <br/> 
c) The information provided through the Platform is based purely based on the information 
uploaded by You, without any independent verification of such information by the Lawyers 
and Advocates. Therefore, please take care to provide accurate information. And do not fail 
to use discretion where your situation demands assistance from a legal professional.
<br/> <br/> 
d) While using the Services, please note that:<br/> 
i) Any information provided through the Services, is for Your information only. You agree 
to act upon such information fully understanding the limitations and potential risks 
involved with acting upon such Services, that is, information customized to respond to 
Your query which does not substitute a physical visit to a Attorney or Law Firm;
<br/> <br/> 
ii) In case you suspect that your legal rights are infringed, please obtain legal 
representation, by visiting an Attorney or Law Firm of Your choice. On the Platform your 
contracts will be reviewed using Artificial Intelligence of computers. However results
may vary when examined in person by an Attorney, hence in no event shall the reports 
generated on this Platform be relied as a final and conclusive solution or replacement of 
advice given by Your Lawyer. <br/> <br/> 
iii) You shall not misuse any information available on or through the Platform and shall 
always act in compliance with law while using the Platform;<br/> <br/> 
iv) You shall not provide inaccurate or misleading or attempt to obtain any information or 
reports via the Platform for fraudulent purposes or to breach any applicable law or 
deliberately cause any third parties to breach any applicable law; and<br/> <br/> 
v) You shall not disregard other legal advice or delay seeking legal advice from an on-site 
Attorney or law enforcement professional due to Our Service.<br/> <br/> 
vi) The Platform are Platform which enables Users to upload their contracts with third 
parties eg. Employers, prospective employers, landlords, vendors etc. All 
correspondence and transactions between You and any third parties are strictly bipartite. We are not and cannot be a party to, or control in any manner, any such 
correspondence, or transactions between You and any third parties. We shall not and 
are not required to mediate or resolve any disputes or disagreements between You and 
any such third parties.<br/> <br/> 
vii) Accordingly, We will not be liable for any loss or damage incurred as the result of any 
such interaction with a third party. We do not provide any warranty as to the quality, 
suitability and appropriateness of any Services availed by You through the Platform or 
any services or information or analysis or conclusions reached by your through the use 
of our Platform. <br/> <br/> 
viii)We do not endorse any third parties services or product and do not intend to be a 
source of advertising or solicitation on the behalf of any third parties.

           </p>

         
          <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
          8) This Service offers an immediate, cost-effective, virtual, AI technology driven, review of the legal 
terms contained in Your contract and an initial assessment of the user’s legal standing under the 
contract; however it is not intended as a substitute for conventional Legal Advice or detailed 
contractual interpretation by an expert. Users agree that they are hereby sufficiently notified 
and informed about the limitations of this service and You are giving your free and informed 
consent to receive the same. 
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            9) Liability Disclaimer</p> 
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            You understand and acknowledge that We do not in any way influence the quality of the 
Services purchased or availed via our Platform. We disclaim all liability, direct or indirect, for 
claims, losses, damages, costs etc. whether in contracts or in torts, whether or not you were 
previously informed of such a possibility of damages, arising out of or in connection with the 
quality of Services. You agree that We are absolved from all such liabilities to the extent legally 
permissible. As a condition precedent to using this service, You agree to unconditionally waive 
and release all claims You may have against us or our directors, officers, shareholders, affiliates, 
assigns, subcontractors, advisors, now or in the future, for all losses, damages, costs or expenses 
arising from or in connection with Your use of this Service. You agree that Our Company shall 
not be held accountable for any direct or indirect liability, claims etc. relating to deficiency, delay 
or non-performance of Service is due to factors that are beyond Our reasonable control. 
            </p>

           
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            10) You acknowledge that We are not responsible for the use of any personal information that 
You disclose or share with others through the use of the Services. While interacting with any 
other Users on Our Platforms Comments / Feedback section, We strongly encourage You to 
exercise reasonable diligence as You would in traditional offline channels and practice judgment 
and common sense before acting upon the advice of or committing to any transaction or 
exchange of information with any other Users or third parties.

 
            </p>

           
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            11) You authorize us to access your User Information and written records of interaction with our 
            Chat Bot for internal quality assessment. 
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            12) Articles and medical information</p> 
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) The Platform contains articles, notes and other information regarding legal contracting 
(“Articles”), for Your personal information only.<br/> <br/> 
b) The Articles do not, in any way, constitute legal advice, expert opinion or legal 
representation. We encourage You to take decisions regarding litigation, civil suits, criminal 
prosecutions, arbitration, mediation etc. only after consulting Your Lawyer or suitable legal 
professionals. We are not responsible for any act or omission committed by You as a result 
of Your interpretation of the Articles posted on the Platform. 
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            13) Fees and Payment
            </p> 
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) In order to Order a contract review, You will be directed to a third party payment gateway 
(“Payment Gateway”) through which payment shall be made by You (“Fee”) for onetime/weekly/monthly/annual subscription /access to the Platform for making review 
request and a follow-up clarification, ifYour credit/debit card or other payment instruments 
will be processed by the Payment Gateway which will also be governed by the terms and 
conditions agreed to between You and Your issuing bank. We will not be responsible for any 
loss or damage to You due to Your use of the Payment Gateway on the Platform.<br/> <br/> 
b) We may impose limits on the number of Service Orders that may be posted through the 
Platform or revise the Fee and may refuse to process any Service Order, at Our sole 
discretion. 
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            14) Use of the Platform and Services</p>  
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) You agree to make use of the Platform and Services for their intended purpose in a bona fide 
manner and remain in compliance with all applicable laws. In particular You agree not to:
i) Print, distribute, share, download, duplicate or otherwise copy, delete, vary or amend or 
use any data or User Information of any User other than You and for whom You are an 
authorized user;
<br/> 
ii) Infringe on any intellectual property rights of any person and/or retain information in 
any computer system or otherwise with an intention to do so;<br/> 
iii) Attempt to gain unauthorized access to any portion or feature of the Platform, or any 
other systems or networks connected to the Platform or to any server, computer, 
network, or to any of the Services by hacking, password “mining” or any other 
illegitimate means;<br/> 
iv) Probe, scan or test the vulnerability of the Platform or Services or any network 
connected to the Platform or Services or breach the security or authentication measures 
on the Platform or any network connected to the Platform or Services;<br/> 
v) Use any automated systems to extract data from the Platform;<br/> 
vi) Make any inaccurate, false, unfair or defamatory statement(s) or comment(s) about Us 
or the brand name or domain name used by Us or any User on the Platform; <br/> 
vii) Take any action that imposes an unreasonable or disproportionately large load on the 
infrastructure of the Platform or Our systems or networks, or any systems or networks 
connected to Us;<br/> 
viii)Circumvent or manipulate the Platform, Services, registration process, Fees, billing 
system, or attempt to do so; <br/> 
ix) You further agree not to host, display, upload, modify, publish, transmit, update, share 
or otherwise make available on the Platform any information, that: <br/> 
x) Contains content or other material protected by intellectual property laws unless You 
own or control the rights thereto or have received all necessary consents;<br/>  
xi) Defames, abuses, harasses, stalks, hurts religious or ethnic sentiments of, threatens or 
otherwise violates the legal rights of others;<br/> 
xii) Is grossly harmful, harassing, blasphemous defamatory, obscene, pornographic, 
pedophilic, libelous, invasive of another’s privacy, hateful, or racially, ethnically 
objectionable, disparaging, relating or encouraging money laundering or gambling, or 
otherwise unlawful in any manner whatever; Harms minors in any way; <br/> 
xiii)Infringes any patent, trademark, copyright or other proprietary rights; <br/> 
xiv)Violates any law for the time being in force; <br/> 
xv) Deceives or misleads the addressee about the origin of such messages or communicates 
any information which is grossly offensive or menacing in nature;<br/> 
xvi)Abets or assists with impersonating another person; <br/> 
xvii) Contains software viruses or any other computer code, files or programs designed to 
interrupt, destroy or limit the functionality of any computer resource; <br/> 
xviii) Threatens the unity, integrity, defence, security or sovereignty of India, friendly 

relations with foreign states, or public order or causes incitement to the commission of 
any cognisable offence or prevents investigation of any offence or is insulting any other 
nation; <br/> 
xix) Conducts or forwards surveys, contests, pyramid schemes or chain letters;<br/> 
xx) Creates profiles or provides content that promotes escort services or prostitution;<br/> 
xxi)Uses any other internet service to send or post spam to drive visitors to any other site 
hosted on or through the Company’s systems, whether or not the messages were 
originated by You, under Your direction, or by or under the direction of a related or 
unrelated third party; or<br/> 
xxii) Contains any content which is non-compliant with data privacy laws and information 
security laws of the country from which you access our Services, Terms of Use or Privacy 
Policy as amended/re-enacted from time to time. 
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            15) Intellectual Property</p>  
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) The intellectual property in the Platform, the Articles, and in the material, content and 
information made available on the Platform including graphics, images, photographs, logos, 
trademarks, the appearance, organisation and layout of the Platform and the underlying 
software code belong to Us or Our licensors. Our Company’s Logos and seals displayed on 
the Portal are either applied or registered trademarks belonging to Us.<br/> <br/> 
b) Copying, modifying, altering, publishing, broadcasting, distributing, selling or transferring 
(whether in whole or in part) any such material is an infringement of Our rights and is 
punishable by law. The information provided on the Platform and through the Services is for 
Your personal use only.
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            16) Indemnity</p> 
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) You agree to indemnify Us, Our owners, licensees, affiliates, group companies and their 
respective officers, directors, agents, and employees, on demand, against any claim, action, 
damage, loss, liability, cost, charge, expense or payment which We may pay, suffer, incur or 
are liable for, in relation to any act You do or cause to be done, in breach of the Terms of 
Use or Your violation of any law, rules or regulations. 
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            17) Feedback, Reputation and Reviews</p>  
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) You agree to be fair, accurate and non disparaging while leaving comments, feedback, 
testimonials and reviews (“Feedback”) on or about the Platform or the Services, You 
acknowledge that You transfer all rights in such Feedback to Us and that We will be free to 
use the same as We may find appropriate. 
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            18) Breach of these Terms of Use</p>  
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) You understand that all Healthcare Professionals reserve the right to deny providing their 
services if they or We have reason to believe that there could be a potential misuse of the 
Services by You. <br/> <br/> 
b) If You have, or We have reasonable grounds to believe that You have, violated these Terms 
of Use in any way or misused the Services, We reserve the right to amend, modify, restrict, 
suspend or discontinue Your access to any or all parts of the Platform without prior notice, 
forfeit unutilized amounts paid by You and report such action to relevant authorities. We 
reserve the right to take recourse to all available remedies under applicable law in 
furtherance of the above.

            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            19) Third Party Sites</p> 
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) All third party advertisements, hyperlinks or other redirection tools on the Platform which 
take You to content operated by third parties are not controlled by Us and do not form part 
of the Platform. We are not liable for any loss or harm that occurs to You as a result of such 
sites.
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            20) Disclaimer and Limitation of Liability</p>  
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) All Services provided on the Platform are intended for information purposes only. They do 
not constitute a legal opinion, prescription of any litigation strategy, contract interpretation
or legal advice for any particular situation you are in. The provision of the Services does not 
create an Attorney-Client or similar relationship between You and the Company. The 
Company is merely the owner of a software application which if powered by Artificial 
Intelligence with reference to the information provided to You and does not select, edit or 
modify your information or document in any manner. <br/> <br/>
b) The Information that you obtain or receive from Us, and our employees, contractors, 
partners, sponsors, advertisers or otherwise on the Site is for informational, educational and 
legal awareness generation purposes only.<br/> <br/>
c) SERVICES PROVIDED BY AND THROUGH THE PLATFORM ARE FOR INFORMATION PURPOSES 
ONLY. THE INFORMATION PROVIDED ON THE PLATFORM IS NOT INTENDED AS A 
SUBSTITUTE FOR, NOR DOES IT REPLACE, PROFESSIONAL LEGAL ADVICE, LEGAL 
REPRESEANTATION, OR LAW ENFORCEMENT MECHANISMS, JUDICIAL RECOURSE. DO NOT 
DISREGARD, AVOID OR DELAY OBTAINING LEGAL ADVICE FROM A QUALIFIED LEGAL
PROFESSIONAL BECAUSE OF SOMETHING YOU MAY HAVE READ ON THE PLATFORM. 
PLATFORM AND SERVICES ARE NOT MEANT TO BE A SUBSTITUE FOR CONVENTIONAL OR 
EMERGENCY LEGAL REPRESENTATION. <br/> <br/>
d) THIS IS INTENDED AS A SERVICE FOR THE GLOBAL AUDIENCE FOUNDED ON THE PRINCIPAL 
THAT TECHNOLOGY, INNOVATION AND PRINCIPLES OF BUSINESS CONTRACTING IS 
RELATIVELY SIMILAR ACROSS THE GLOBE. HOWEVER, YOU MUST TAKE NOTE THAT THE LAW 
OF CONTRACTS IS A TERRITORIAL SUBJECT MATTER AND THE CONTRACTS OF A COUNTRY 
MAY HAVE TERMINOLOGY, COVENANTS AND OBLIGATIONS PECULIAR / UNIQUE TO THAT 
COUNTRY ONLY. YOUR USE OF INFORMATION PROVIDED ON THE PLATFORM MUST BE 
CROSS VERIFIED AGAINST THE LAWS AND TERMINOLOGY PECULIAR TO YOUR COUNTRY.
RELIANCE ON THE INFORMATION PROVIDED ON THE PLATFORM MUST BE DONE SOLELY AT 
YOUR OWN RISK. NOTHING STATED OR POSTED ON THE PLATFORM OR AVAILABLE 
THROUGH ANY SERVICES IS INTENDED TO BE, AND MUST NOT BE TAKEN TO BE, THE 
PRACTICE OF LAW OR THE PROVISION OF LEGAL SERVICES IN YOUR COUNTRY OR STATE.<br/> <br/>
e) WE MAKE NO GUARANTEES, REPRESENTATIONS OR WARRANTIES, WHETHER EXPRESSED OR 
IMPLIED, WITH RESPECT TO PROFESSIONAL QUALIFICATIONS, EXPERTISE, QUALITY, AND 
EFFECTIVENSS OF ANALYSIS AND QUALITY OF WORK OR OTHER INFORMATION HEREIN OR 
PROVIDED BY US. FURTHER WE DO NOT IN ANY WAY ENDORSE OR PROMOTE ANY 
INDIVIDUAL LEGAL PROFESSIONAL. IN NO EVENT SHALL WE BE LIABLE TO YOU OR ANYONE 
ELSE FOR ANY DECISION MADE OR ACTION TAKEN BY YOU RELYING ON SUCH 
INFORMATION. <br/> <br/>
f) WE DO NOT RECOMMEND OR ENDORSE ANY SPECIFIC LEGAL COURSE OF ACTION. WE ARE 
NOT SOLICITING BUSINESS FOR ANY INDIVIDUAL LAWYER OR LAW FIRM. IF YOU RELY ON 
ANY OF THE INFORMATION PROVIDED BY THE SITE, YOU DO SOLELY AT YOUR OWN RISK.<br/> <br/>
g) WE ARE AN INFORMATION TECHNOLOGY PROVIDER. OUR PURPOSE IS TO MAKE ARTIFICIAL 
INTELLIGENCE TRAINED STATE OF THE ART SEARCH ENGINES AVAILABLE TO BOTH LAYMAN 
AND LEARNED USERS AT THEIR FINGERTIPS, SO AS TO MAKE EVAN A TEDIOUS TASKS LIKE 
READING AND COMPREHENDING COMPLEX BUSINESS CONTRACTS QUICK AND EASY TO 
ACCOMPLISH FOR THEM. WE ARE NOT REGISTERED AS PRACTICING ATTORNEYS UNDER ANY 
JURISDICTIONAL BAR COUNCIL NOR ARE DO WE PROFESS TO HAVE ANY SPECIALIST 
TRAINING IN ANY PARTICULAR SYSTEM OF LAW.<br/> <br/>
h) Accordingly, we will not be liable for:<br/> <br/>
i) any wrong analysis or quality of report generated by the Portal or for any professional
negligence; <br/> 
ii) Any type of inconvenience suffered by You due to errors in the reports; <br/>
iii) any legal eventualities that might occur subsequent to using the Services or after Your 
reliance on reports generated by the Platform.<br/>
iv) You expressly agree that Your use of the Platform and Your reliance upon any of its 
contents is at your sole risk and We shall not be liable or responsible for any errors, 
omissions, deficiency in reports generated on Our Platform. While We take reasonable 
efforts to ensure that information on the Platform is updated at frequent intervals, You 
understand that the Platform and Services are provided on an “as is” and “as available” 
basis without any representation or warranty, express or implied. We do not warrant 
that:<br/>
(1) The Platform or the Services will be constantly available, or not available at all. We 
shall have no liability to You for any interruption or delay in access to any of the 
Platform or Services availed through it, irrespective of the cause; <br/>
(2) The information on the Platform or given through Services is complete, true, 
accurate or non-misleading;<br/>
(3) Any errors or defects in the Platform or Services will be corrected;<br/>
(4) The Platform are secure or free of viruses, Trojans or other malware; <br/>
(5) The contents of the Platform or the Services do not infringe any intellectual property 
rights; <br/>
(6) The quality, suitability and appropriateness of Services will be to Your satisfaction or 
that there will be no deficiency in Services availed by You.<br/>

i) YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY DISPUTE WITH US IS THE CANCELLATION OF 
YOUR REGISTRATION. IN NO EVENT SHALL OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR 
ANY AND ALL CLAIMS RELATING TO OR ARISING OUT OF YOUR USE OF THE SERVICES OR THE 
SITE, REGARDLESS OF THE FORM OF ACTION, EXCEED THE TOTAL AMOUNT OF ANNUAL 
SUBSCRIPTION THAT YOU PAID TO UTILIZE THE PLATFORM. IN NO EVENT SHALL WE BE 
LIABLE TO YOU (OR TO ANY THIRD PARTY CLAIMING UNDER OR THROUGH YOU) FOR ANY 
INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES ARISING FROM 
YOUR USE OF, OR INABILITY TO USE, THE INFORMATION PROVIDED ON THE PLATFORM
INFORMATION PROVIDED ON THE PLATFORM AND/OR THE SERVICES. THESE EXCLUSIONS 
APPLY TO ANY CLAIMS FOR LOST PROFITS, LOST DATA, LOSS OF GOODWILL, WORK 
STOPPAGE, COMPUTER FAILURE OR MALFUNCTION, ANY OTHER COMMERCIAL DAMAGES 
OR LOSSES, OR MEDICAL MALPRACTICE OR NEGLIGENCE OF PHYSICIANS UTILIZED THROUGH 
USE OF THE SERVICE, WHETHER OR NOT THE CLAIM IS BASED UPON NEGLIGENCE OR 
BREACH OF WARRANTY OR STRICT LIABILITY IN TORT OR ANY OTHER CAUSE OF ACTION AND 
EVEN IF WE KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. 
BECAUSE SOME STATES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR THE 
LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, IN SUCH STATES 
OR JURISDICTIONS, OUR LIABILITY SHALL BE LIMITED TO THE EXTENT PERMITTED BY LAW.

            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            21) Privacy Policy</p>  
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) Any personal information You supply to Us when You use these Platform or the Services will 
be used in accordance with Our Privacy Policy. The Privacy Policy sets out the type of 
information collected from You, the purpose, means and modes of usage of such 
information, and the ways in which and to whom such information may be disclosed by Us.<br/><br/>
b) By using or accessing the Platform, You understand that certain information about You is 
being collected by Us and consent to its collection, the manner of its collection and to its 
disclosure in accordance with the Privacy Policy.
            </p>

            <p style={{color:"#2d3748",fontSize:15,fontWeight:700}}>
            22) Miscellaneous</p>  
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            a) Severability and Waiver - If any provisions of these Terms of Use are found to be invalid by 
any court having competent jurisdiction, the invalidity of such provision shall not affect the 
validity of the remaining provisions of these Terms of Use, which shall remain in full force 
and effect. No waiver of any term of these Terms of Use shall be deemed a further or 
continuing waiver of such term or any other term.<br/><br/>
b) Relationship between the Company and Users- Use of the Platform does not create any 
association, partnership, venture or relationship of principal and agent, master and servant 
or employer and employee between You and the Company. There is no relationship of 
principal and agent, master and servant or employer and employee between the User and 
the Company. <br/><br/>
c) Applicable Law and Dispute Resolution - These Terms of Use shall be governed by and 
interpreted and construed in accordance with the laws of Delaware. Any disputes pertaining 
to the Platform shall be subject to the exclusive jurisdiction of the appropriate courts in 
Delaware. <br/> <br/>
d) Customer Care - In the event that You have any grievance in relation to the Platform or Our 
Services, You may write to <a href=" mailto:ireviewai11@gmail.com" >ireviewai11@gmail.com.</a> Please feel free to contact Us if 

You have any questions or comments on the Platform, Our Services, these Terms of Use 
(including all inquiries related to copyright infringement) regarding these Platform.
            </p>

            
            <p style={{color:"#5e6670",fontSize:15,fontWeight:400}}>
            26. This electronic record is generated by a computer system and does not require any physical 
            or digital signatures to signify consent to its terms and conditions.
            </p>

        </div>
        
      </Modal.Body>
      <Modal.Footer>
    
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            onAccept(); // Call the callback function when the user accepts
            handleClose();
          }}
        >
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  );
}

export default TermsandCondition;
