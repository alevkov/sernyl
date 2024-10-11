import React, { useState, useEffect } from 'react';
import { Terminal, User, Briefcase, Heart, X, Music, Book, Globe, Code, Mail, MessageCircle, FileText, Award } from 'lucide-react';

const AsciiArt = () => (
  <pre className="text-green-400 text-xs leading-none">
    {`
                    @@@@@@@@@    @@@@@@
               @@@@@%**+++**#@@@@@*--=@@
      @@@@@@@@@*==--------------=----+@@
     @@%--=#=------------------------=@@
      @@*-----------------------------=%@@@
      @@*---------------------------------=#@@
     @@=-----------------------------------=@@
 @@@@%------------------------------------+@@
@@+-------------=#@%=---------------------=@@@
@@@+------------%@@@%--------##=------------*@
  @@------------=@@@+-------@@@@------------=@@
 @@#-------------+@@*------=@@@@=------------=@@@
@@@*=-------------=@@@@-------%@@@---------------=#@@
@@-------------------==---------=------------------*@@
@@@*--------------------------------------------@@@@
 @@@=-----=#=-----------------------#*------*@
   @@------#@=---------------------=@*------%@
    @%------%@@@=--------------=***%@=-----+@@
     @%=------=@%---=---=+**=-=@%===------*@@
     @@@=-----=@#=@@@@%%@@#%@@@%--------=#@@
       @@#=---=#@@*=-=*+--------------=*@@@
        @@@=--------------------------=@@
          @%----------------------==--=@@
          @@--*@@*------=%@+---=%@@@@@@@@
          @@=*@@@@@@@@*=%@@@=--*@@
           @@@@      @@@@@@@*-=@@
                           @%-=@@
                           @@*@@
                            @@@  
    `}
  </pre>
);

const InfoItem = ({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string | React.ReactNode }) => (
  <div className="flex items-center mb-2">
    <Icon className="w-5 h-5 mr-2 text-green-400" />
    <span className="text-gray-300">{label}:</span>
    <span className="ml-2 text-white">{value}</span>
  </div>
);

const WorkItem = ({ title, year, description, link }: { title: string; year: string; description: string; link: string }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-green-400">{title}</h3>
    <p className="text-sm text-gray-400">{year}</p>
    <p className="mt-1">{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Learn more</a>
  </div>
);

const App: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = `sernyl@OMac-Studio.local
--------------------------------
OS: macOS 13.4
Host: local
Kernel: Polish-Ukrainian
Uptime: 3 days & nights (record)
Shell: zsh 5.9
UA: (Language) Fluent
EN: (Language) Fluent
DE: (Language) Conversational
RU: (Language) No.
Terminal: Wave
Terminal Font: Monaco 12
CPU: Apple M2 Ultra
GPU: Apple M2 Ultra
Memory: 12369MiB / 65536MiB

Interests:
* learning

Dislikes:
* what technology became

Gender: bender
* https://en.pronouns.page/@sernyl`

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-mono p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-center">
          <div className="ascii-container mb-8 md:mb-0 md:mr-8 animate-pulse">
            <AsciiArt />
          </div>
          <div className="info-container bg-gray-800 p-6 rounded-lg shadow-lg w-full">
            <h1 className="text-3xl font-bold mb-4 text-green-400">⏿ sernyl</h1>
            <div className="mb-6">
              <pre className="whitespace-pre-wrap text-sm">{typedText}</pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoItem icon={Mail} label="Email" value={<a href="mailto:0@sernyl.dev" className="text-blue-400 hover:underline">0@sernyl.dev</a>} />
              <InfoItem icon={MessageCircle} label="Discord" value={<a href="https://discordapp.com/users/sernyl" className="text-blue-400 hover:underline">@sernyl</a>} />
              <InfoItem icon={User} label="Name" value="[redacted]" />
              <InfoItem icon={Briefcase} label="Occupation" value="Data Warlock" />
              <InfoItem icon={Heart} label="Passion" value="Harm Redux" />
              <InfoItem icon={Music} label="Hobby" value="Electronic music" />
              <InfoItem icon={Book} label="Writing" value="Poetry" />
              <InfoItem icon={Globe} label="Languages" value="UA, DE, EN" />
              <InfoItem icon={Code} label="Stack" value="SERN (SQL, Express, React, Node.js" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Works</h2>
          <div className="space-y-6">
            <WorkItem
              title="Deep Learning for Behavior-Based, Invisible Multi-Factor Authentication"
              year="2022"
              description="US Patent App. 17/664,867. A novel approach to multi-factor authentication using deep learning techniques for behavior-based authentication."
              link="https://patents.google.com/patent/US20190044942A1/en"
            />
            <WorkItem
              title="Generating predicate logic expressions from natural language"
              year="2021"
              description="Published in SoutheastCon 2021. A study on converting natural language to predicate logic expressions, enhancing the interface between human language and logical computational systems."
              link="https://ieeexplore.ieee.org/abstract/document/9401852"
            />
            <WorkItem
              title="Using Multi-Factor Authentication as a Labeler for Machine Learning-Based Authentication"
              year="2022"
              description="US Patent App. US20220366026A1. An innovative method leveraging multi-factor authentication data to improve machine learning models for authentication systems."
              link="https://patents.google.com/patent/US20220366026A1/en"
            />
            <WorkItem
              title="Generating Academic Success through Social Networking"
              year="2016"
              description="Presented at The Fourteen LACCEI International Multi-Conference for Engineering. A study on leveraging social networking to enhance academic performance and success."
              link="http://www.laccei.org/LACCEI2016-SanJose/SP057.pdf"
            />
            <WorkItem
              title="Implementation of the Quine-McCluskey Boolean simplification algorithm in an interactive smartphone game"
              year="2016"
              description="A novel approach to teaching Boolean algebra through an interactive smartphone game, implementing the Quine-McCluskey algorithm."
              link="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=TnQxjKYAAAAJ&citation_for_view=TnQxjKYAAAAJ:u-x6o8ySG0sC"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-xl font-bold text-green-400">⏿ Don't eff with the ineffable</p>
        </div>
      </div>
    </div>
  );
};

export default App;