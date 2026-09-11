import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Divider } from '../ui/Divider';
import { Heading, Text, Eyebrow } from '../ui/Typography';
import { Mail, Search, CheckCircle, AlertCircle } from 'lucide-react';

export const FormControlsSection: React.FC<{ surfaceContext: 'dark' | 'light' }> = ({
  surfaceContext,
}) => {
  const [emailInput, setEmailInput] = useState<string>('growth@enterprise.com');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [messageInput, setMessageInput] = useState<string>(
    'We are looking to scale our digital presence with custom web architecture and AI automation.'
  );

  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <Eyebrow prefix="07 //" hasIndicator indicatorColor="accent">
          ACCESSIBLE FORM CONTROLS & UTILITIES
        </Eyebrow>
        <Heading level="h2" className="mt-2">
          Functional, Accessible Input Elements
        </Heading>
        <Text muted constrained className="mt-2">
          Engineered for keyboard accessibility, unambiguous focus feedback, and high contrast.
          Never rely on color alone to communicate state.
        </Text>
      </div>

      {/* Form Controls Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Elements */}
        <Card variant="default" surfaceContext={surfaceContext} padding="lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                Text Inputs & Search Controls
              </h3>
              <Badge variant="accent" size="sm" mono>
                ACCESSIBLE
              </Badge>
            </div>

            <div className="space-y-4">
              <Input
                label="Work Email Address"
                placeholder="you@company.com"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                helperText="We send direct strategic project evaluations within 24 hours."
                iconLeft={<Mail className="w-4 h-4" />}
                surfaceContext={surfaceContext}
              />

              <Input
                label="Global Capability Search"
                placeholder="Search UI/UX, SEO, AI..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                iconLeft={<Search className="w-4 h-4" />}
                surfaceContext={surfaceContext}
              />

              <Input
                label="Validated Field with Warning / Error"
                defaultValue="invalid-format-input"
                error="Please provide a valid company domain name."
                surfaceContext={surfaceContext}
              />
            </div>
          </div>
        </Card>

        {/* Textarea & Actions */}
        <Card variant="default" surfaceContext={surfaceContext} padding="lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">
                Textarea & Communication Control
              </h3>
              <Badge variant="neutral" size="sm" mono>
                MULTI-LINE
              </Badge>
            </div>

            <div className="space-y-4">
              <Textarea
                label="Project Scope & Objectives"
                placeholder="Briefly describe your business goals and key growth targets..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                helperText="Character count recommendation: 50–500 characters."
                surfaceContext={surfaceContext}
                rows={5}
              />

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--foreground-subtle)]">
                  TAB ORDER: FULLY KEYBOARD NAVIGABLE
                </span>
                <Button variant="primary" size="sm" surfaceContext={surfaceContext}>
                  Submit Brief
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Badges & Status Signals */}
      <Card variant="technical" surfaceContext={surfaceContext} padding="lg" technicalCode="SIGNALS // BADGES">
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
              Status Signals & Telemetry Badges
            </h3>
            <p className="text-xs text-[var(--foreground-muted)]">
              Pill badges with live pulse indicators, monospace technical stamps, and category tags.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent" dot dotColor="accent">
              Active Project
            </Badge>
            <Badge variant="success" dot dotColor="success">
              Systems Operational
            </Badge>
            <Badge variant="neutral" dot dotColor="neutral">
              Queued
            </Badge>
            <Badge variant="accent" mono size="sm">
              LATENCY: 18MS
            </Badge>
            <Badge variant="default" size="sm">
              WEB DEVELOPMENT
            </Badge>
            <Badge variant="outline" size="sm">
              UI/UX DESIGN
            </Badge>
            <Badge variant="outline" mono size="sm">
              ROAS // 4.8X
            </Badge>
          </div>
        </div>
      </Card>

      {/* Dividers Specimen */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-[var(--foreground)]">
          Hairline Dividers & Technical Section Delimiters
        </h3>
        <div className="space-y-4">
          <Divider hasNode />
          <Divider label="02 // CAPABILITIES MATRIX" align="left" hasNode />
          <Divider label="SPECIFICATION COMPLETE" align="center" />
        </div>
      </div>
    </div>
  );
};
