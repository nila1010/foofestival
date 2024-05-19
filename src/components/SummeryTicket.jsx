import Heading from "./Headings";

export default function SummeryTicket({ info }) {
  return (
    <article>
      <Heading
        as="h2"
        size="md"
        customClass="mt-5">
        Billing information
      </Heading>
      {info && (
        <div>
          <p>
            Fullname: {info.billingfirstname} {info.billinglastname}{" "}
          </p>
          <p>Adress: {info.address} </p>
          <p>
            City: {info.city} {info.zip}{" "}
          </p>
          <p>Email: {info.email} </p>
          <p>Phone: {info.tel} </p>

          <Heading
            as="h3"
            size="md"
            customClass="mt-3">
            Extra persons
          </Heading>
          {info.extrapersons.map((person) => {
            return <p key={person}>Name: {person}</p>;
          })}
        </div>
      )}
    </article>
  );
}
