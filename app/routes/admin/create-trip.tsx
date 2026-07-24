import { Header } from "../../../components";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";
import type { Route } from "./+types/create-trip";

export const loader = async () => {
  const response = await fetch("https://api.restcountries.com/countries/v5", {
    headers: { Authorization: `Bearer ${process.env.REST_COUNTRIES_API_KEY}` },
  });

  const data = await response.json();

  return data;
};

const handleSubmit = async () => {};

const CreateTrip = ({ loaderData }: Route.ComponentProps) => {
  const countries = loaderData as Country[];
  console.log(countries);

  return (
    <main className="flex flex-col gap-10 pb-20 wrapper">
      <Header
        title="Add A New Trip"
        description="View and edit AI generated travel plans"
      />
      <section className="mt-2.5 wrapper-md">
        <form className="trip-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Country">Country</label>
            <ComboBoxComponent id="country" dataSource={["title", "title1"]} />
          </div>
        </form>
      </section>
    </main>
  );
};

export default CreateTrip;
