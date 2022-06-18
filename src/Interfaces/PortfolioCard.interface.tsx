export interface PortfolioInterface {
  id: number,
  img_src: string,
  title: string,
  subtitle: string,
  tags?: Array<string>
  text1: string,
  resources_link?: string,
  resources_text?: string
}