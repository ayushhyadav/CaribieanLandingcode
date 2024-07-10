import './TermConditions.css';

function TermConditions() {
  return (
    <div className="term-condition-container">
      <h1 style={{textAlign:'center'}}>Terms & Conditions</h1>
      <p id="center">
        Welcome to Caribbeaneaze. These terms and conditions outline the rules
        and regulations for the use of our website.
      </p>
      
      <div className="intro">
        <h2>1. Introduction</h2>
        <p>
          By accessing this website, we assume you accept these terms and
          conditions in full. Do not continue to use Caribbeaneaze's website if
          you do not accept all of the terms and conditions stated on this page.
        </p>
      </div>
      
      <div className="intro">
        <h2>2. License</h2>
        <p>
          Unless otherwise stated, Caribbeaneaze and/or its licensors own the
          intellectual property rights for all material on Caribbeaneaze. All
          intellectual property rights are reserved. You may view and/or print
          pages from <a href="https://www.caribbeaneaze.com/">Caribbeaneaze</a> for your own personal use subject
          to restrictions set in these terms and conditions.
        </p>
      </div>
      
      <div className="intro">
        <h2>3. User Comments</h2>
        <p>
          Certain parts of this website offer the opportunity for users to post
          and exchange opinions, information, material, and data ('Comments') in
          areas of the website. Caribbeaneaze does not screen, edit, publish or
          review Comments prior to their appearance on the website and Comments do
          not reflect the views or opinions of Caribbeaneaze, its agents, or
          affiliates. Comments reflect the view and opinion of the person who
          posts such view or opinion.
        </p>
      </div>
      
      <div className="intro">
        <h2>4. Content Liability</h2>
        <p>
          We shall have no responsibility or liability for any content appearing
          on your website. You agree to indemnify and defend us against all claims
          arising out of or based upon your website.
        </p>
      </div>
      
      <div className="intro">
        <h2>5. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of [Your Country/State] and you irrevocably submit to the
          exclusive jurisdiction of the courts in that location.
        </p>
      </div>
    </div>
  );
}

export default TermConditions;
