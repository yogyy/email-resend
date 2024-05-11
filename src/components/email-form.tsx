import { render } from "@react-email/render";
import { useState } from "react";
import SampleEmail from "../email/sample";

const EmailForm = () => {
  const [data, setData] = useState(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const finalHtml = render(<SampleEmail userFirstname="constantine" />, {
      pretty: true,
    });

    const finalText = render(<SampleEmail userFirstname="constantine" />, {
      plainText: true,
    });

    try {
      const res = await fetch("/api/send-email.json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "your registration resend email to testing",
          subject: `Hi, constantine`,
          html: finalHtml,
          text: finalText,
        }),
      });
      const data = await res.json();
      setData(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="grid gap-4">
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <form onSubmit={handleSubmit}>
        <input
          type="submit"
          value="Send Email"
          className="px-2 py-3 hover:bg-black/70 transition-colors duration-200 hover:cursor-pointer"
        />
      </form>
    </div>
  );
};
export default EmailForm;
