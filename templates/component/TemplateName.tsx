import styles from './TemplateName.module.scss';
import { ITemplateNameProps } from './TemplateName.props';
import cn from 'classnames';

const TemplateName = (props: ITemplateNameProps): JSX.Element => {
 return <div className={cn(styles.templateName)}></div>;
};

export default TemplateName;
