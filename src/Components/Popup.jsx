import React from "react";

const Popup = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-center text-[--color-main] mb-6">
        Apply for Photoshop Internship
      </h1>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="input" />
          <input type="text" placeholder="Father's Name" className="input" />
          <input type="text" placeholder="Phone Number" className="input" />
          <input
            type="text"
            placeholder="CNIC (XXXXX-XXXXXXX-X)"
            className="input"
          />
          <input
            type="text"
            placeholder="Permanent Address"
            className="input"
          />
          <input type="text" placeholder="Institute" className="input" />
          <input
            type="text"
            placeholder="Working Experience"
            className="input"
          />
          <input type="text" placeholder="Past Project URL" className="input" />
        </div>

        <input
          type="text"
          placeholder="Where did you hear about internee.pk?"
          className="input"
        />
        <input
          type="text"
          placeholder="What do you expect from us?"
          className="input"
        />

        <div>
          <label className="font-semibold">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            className="block w-full mt-2 border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="font-semibold">
            Upload Payment Screenshot <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            className="block w-full mt-2 border rounded px-3 py-2"
          />
        </div>

        <div className="bg-gray-100 border p-4 rounded">
          <h2 className="text-lg font-semibold text-[--color-main]">
            Payment Section | 500 PKR or 5$
          </h2>
          <p>Meezan Bank: 99430106993383 (IBAN: PK86MEZN0099430106993383)</p>
          <p>SadaPay: 03453191638 (IBAN: PK94SADA0000003453191638)</p>
          <p>EasyPaisa: 03276227156 (MUHAMMAD AHSAN BASHIR)</p>
          <p className="text-sm text-red-600 mt-2">
            Note: You can enroll in only one internship at a time.
          </p>
        </div>

        <button
          type="submit"
          className="w-full  text-white bg-main py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Popup;
