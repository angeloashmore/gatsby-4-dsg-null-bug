import * as React from "react";
import { graphql } from "gatsby";
import { PageProps } from "gatsby";

export const PageTemplate = ({ data, pageContext }: PageProps) => {
  return (
    <main>
      <p>This is a deferred statically generated (DSG) page.</p>
      <dl>
        <dt>pageContext</dt>
        <dd>
          <pre>
            <code>{JSON.stringify(pageContext, null, 2)}</code>
          </pre>
        </dd>
        <dt>data</dt>
        <dd>
          <pre>
            <code>{JSON.stringify(data, null, 2)}</code>
          </pre>
        </dd>
      </dl>
    </main>
  );
};

export default PageTemplate;

export const query = graphql`
  query PageTemplate {
    allPrismicPage {
      nodes {
        uid
        data {
          title {
            text
          }
        }
      }
    }
  }
`;
