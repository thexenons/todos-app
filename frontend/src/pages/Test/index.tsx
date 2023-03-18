import { Children, FC } from "react";
import { useLoaderData } from "react-router-dom";
import type { PageKey } from "..";
import pages from "..";
import Link from "../../components/atoms/Link";
import Container from "../../components/layout/Container";
import type { TestParams } from "./types";

const Test: FC = () => {
  const { title = "" } = useLoaderData() as TestParams;

  return (
    <Container>
      <h1>{title}</h1>
      <ul>
        {Children.toArray(
          Object.keys(pages).map((pageKey) => (
            <>
              <li>
                <Link pageKey={pageKey as PageKey}>{pageKey}</Link>
              </li>
              {Children.toArray(
                Object.keys(pages[pageKey as PageKey]?.children || {}).map(
                  (childPageKey) => (
                    <li style={{ marginLeft: 16 }}>
                      <Link pageKey={childPageKey as PageKey}>
                        {childPageKey}
                      </Link>
                    </li>
                  )
                )
              )}
            </>
          ))
        )}
      </ul>
    </Container>
  );
};

export async function getInitialData(): Promise<TestParams> {
  return {
    title: "Test",
  };
}

export * from "./types";
export default Test;
