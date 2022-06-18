export interface PortfolioInterface {
  id: number,
  img_src: string,
  title: string,
  subtitle: string,
  tags?: Array<string>
  text1: string,
  resource_link?: string,
  resource_text?: string
}