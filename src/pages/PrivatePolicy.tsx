const PrivatePolicy = () => {
  return (
    <div className="w-screen p-1 bg-slate-200 dark:bg-black">
      <div className="w-11/12 m-auto bg-white dark:text-white dark:bg-slate-600">
        <h1 className="text-red-600 font-medium text-center">
          Umbrella.com Privacy Policy
        </h1>
        <p>
          We know that you care how information about you is used and shared,
          and we appreciate your trust that we will do so carefully and
          sensibly.
        </p>
        <p>
          This Privacy policy describes how Umbrella Corporation and its
          subsidiaries collect and process your personal information through
          Umbrella websites, devices, products, services, online and physical
          stores, and applications that reference this Privacy policy.
        </p>
        <div>
          <h3 className="border-2 rounded-sm border-transparent text-center font-bold text-red-600 bg-slate-400 dark:bg-slate-800">
            Content
          </h3>
          <label className="border-2 rounded-sm border-transparent text-center font-bold dark:bg-slate-600">
            Cookies
          </label>
          <ul className="list-inside">
            <li>
              Umbrella.com may set and access Umbrella.com cookies on your
              computer.
            </li>
            <li>
              Cookies are used to provide our system with the basic information
              to provide the services you are requesting.
            </li>
            <li>
              Cookies can be cleared at any time from your internet browser
              settings.
            </li>
          </ul>
          <label className="border-2 rounded-sm border-transparent text-center font-bold dark:bg-slate-600">
            Website Comments
          </label>
          <ul className="list-inside">
            <li>
              When someone visits our sites, there may be an ability to submit
              comments on particular articles or pages.
            </li>
            <li>
              When comments are submitted, you are entitled to use aliases or
              information that completely hides your identity.
            </li>
            <li>
              When a comment is submitted, the relevant details (name, email,
              website) that you provide are stored. These details are stored so
              that we can display your comment back to you, and to anyone
              viewing the comment sections on the site.
            </li>
          </ul>
          <label className="border-2 rounded-sm border-transparent text-center font-bold dark:bg-slate-600">
            Changes to Our Privacy Policy
          </label>
          <ul className="list-inside">
            <li>
              We may make changes to our Privacy Policy in the future, however,
              the most current version of the policy will govern our processing
              of your personal data and will always be available to you.
            </li>
            <li>
              By continuing to access or use our services, you agree to be bound
              to the terms of our Privacy Policy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrivatePolicy;
