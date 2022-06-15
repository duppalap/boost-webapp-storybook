import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  alpha,
  styled,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import * as React from 'react';

export interface MAccordianProps extends Partial<AccordionProps> {
  title: string | undefined;
  help?: string;
  subtitle?: string;
  content?: any;
  info?: string;
  history?: any;
  disabled?: boolean;
  icon?: JSX.Element;
}

export default function MAccordian(props: MAccordianProps) {
  const theme = useTheme();
  const { title, help, info, children, icon, history, subtitle } = props;

  const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary expandIcon={<ExpandMoreIcon />} {...props} />
  ))(({ theme }) => ({
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    marginBottom: -1,
    '&.Mui-expanded': {
      minHeight: 48,
      maxHeight: 50
    },
    borderRadius: '8px 8px 0 0'
  }));

  return (
    <Accordion key={`accordian_${title}`} sx={{ boxShadow: theme.shadows[3] }} {...props}>
      <AccordionSummary key={`accordian_summary_${title}`}>
        {icon}
        <Typography
          variant="subtitle1"
          sx={{
            ...(icon && { pl: 1.5 })
          }}
        >
          {title}
        </Typography>
        {info && (
          <Typography sx={{ color: 'text.secondary', marginLeft: 1 }}> {`(${info})`} </Typography>
        )}
        {help && (
          <Tooltip title={`${help}`}>
            <InfoIcon sx={{ marginLeft: 1 }} />
          </Tooltip>
        )}
        {history && history}
        <Typography
          sx={{
            fontStyle: 'italic',
            fontSize: 12,
            marginTop: 0.5,
            marginLeft: 1
          }}
        >
          {subtitle}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}
